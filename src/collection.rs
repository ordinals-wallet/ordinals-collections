use crate::InscriptionId;
use anyhow::Result;
use rayon::prelude::*;
use serde::{Deserialize, Deserializer, Serialize};
use serde_json::*;

fn deserialize_number_as_string<'de, D>(deserializer: D) -> Result<String, D::Error>
where
    D: Deserializer<'de>,
{
    let value: serde_json::Value = Deserialize::deserialize(deserializer)?;
    if let serde_json::Value::Number(num) = value {
        Ok(num.to_string())
    } else {
        let v = format!("{}", value).replace("\"", "");
        Ok(v)
    }
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Collection {
    pub name: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub inscription_icon: Option<InscriptionId>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon: Option<String>,
    pub slug: String,
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub twitter_link: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub discord_link: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub website_link: Option<String>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Inscription {
    pub id: InscriptionId,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub meta: Option<InscriptionMeta>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct InscriptionMeta {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub attributes: Option<Vec<InscriptionAttribute>>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct InscriptionAttribute {
    pub trait_type: String,
    #[serde(deserialize_with = "deserialize_number_as_string")]
    pub value: String,
}

pub fn list_slugs() -> Result<Vec<String>> {
    Ok(std::fs::read_dir("collections")?
        .filter_map(|e| {
            let entry = e.unwrap();
            if entry.metadata().unwrap().is_dir() == false {
                return None;
            }

            let dir_name = entry.path().to_str().unwrap().to_string();

            let split: Vec<_> = dir_name.split("/").collect();
            Some(split[split.len() - 1].to_string())
        })
        .collect())
}

pub fn write(collection: &Collection, inscriptions: &Vec<Inscription>) -> Result<()> {
    let new_collection = to_string_pretty(&to_value(collection)?).unwrap();
    let new_inscriptions = to_string_pretty(&to_value(inscriptions)?).unwrap();

    std::fs::write(
        format!("collections/{}/meta.json", collection.slug),
        new_collection,
    )
    .unwrap();
    std::fs::write(
        format!("collections/{}/inscriptions.json", collection.slug),
        new_inscriptions,
    )
    .unwrap();

    Ok(())
}

pub fn read(slug: &String) -> Result<Collection> {
    let path = format!("collections/{}/meta.json", slug);
    let data = match std::fs::read_to_string(&path) {
        Ok(v) => v,
        Err(e) => anyhow::bail!("[{}] {} {}", slug, e, path),
    };

    let value: Value = match serde_json::from_str(&data) {
        Ok(v) => v,
        Err(e) => anyhow::bail!("[{}] {}", slug, e),
    };

    let res: Collection = match serde_json::from_value(value.clone()) {
        Ok(v) => v,
        Err(e) => anyhow::bail!("[{}] {}", slug.clone(), e),
    };

    if res.slug != slug.to_string() {
        anyhow::bail!("[{}] slug not same {}", slug.clone(), res.slug)
    }

    Ok(res)
}

pub fn read_inscriptions(slug: &String) -> Result<Vec<Inscription>> {
    let path = format!("collections/{}/inscriptions.json", slug);
    let data = match std::fs::read_to_string(&path) {
        Ok(v) => v,
        Err(e) => anyhow::bail!("[{}] {} {}", slug, e, path),
    };

    let values: Vec<Value> = match serde_json::from_str(&data) {
        Ok(v) => v,
        Err(e) => anyhow::bail!("[{}] {}", slug, e),
    };

    let res: Vec<Result<Inscription>> = values
        .par_iter()
        .map(|e| match serde_json::from_value::<Inscription>(e.clone()) {
            Ok(v) => Ok(v),
            Err(err) => anyhow::bail!("{}", err),
        })
        .collect();

    let errors: Vec<_> = res
        .par_iter()
        .filter_map(|e| match e {
            Ok(_) => None,
            Err(e) => Some(format!("[{}] {}", slug, e)),
        })
        .collect();

    if errors.len() > 0 {
        anyhow::bail!("{:#?}", errors);
    }

    let inscriptions: Vec<_> = res
        .par_iter()
        .filter_map(|e| match e {
            Ok(v) => Some(v.clone()),
            Err(_) => None,
        })
        .collect();

    Ok(inscriptions)
}

pub fn list() -> Result<(Vec<Collection>, Vec<String>)> {
    let slugs = self::list_slugs()?;

    let res: Vec<_> = slugs.iter().map(|e| self::read(e)).collect();

    let errors: Vec<_> = res
        .par_iter()
        .filter_map(|e| match e {
            Ok(_) => None,
            Err(e) => Some(format!("{}", e)),
        })
        .collect();

    let collections: Vec<_> = res
        .par_iter()
        .filter_map(|e| match e {
            Ok(v) => Some(v.clone()),
            Err(_) => None,
        })
        .collect();

    Ok((collections, errors))
}

pub fn list_inscriptions() -> Result<(Vec<(Collection, Vec<Inscription>)>, Vec<String>)> {
    let (collections, _) = self::list()?;

    let inscriptions: Vec<_> = collections
        .par_iter()
        .map(|e| self::read_inscriptions(&e.slug))
        .collect();

    let errors: Vec<_> = inscriptions
        .par_iter()
        .filter_map(|e| match e {
            Ok(_) => None,
            Err(e) => Some(format!("{}", e)),
        })
        .collect();

    let res: Vec<_> = inscriptions
        .par_iter()
        .enumerate()
        .filter_map(|(i, e)| match e {
            Ok(v) => Some((collections[i].clone(), v.clone())),
            Err(_) => None,
        })
        .collect();

    Ok((res, errors))
}

pub fn reformat() -> Result<()> {
    let (collections, _) = self::list_inscriptions()?;

    collections
        .par_iter()
        .for_each(|(collection, inscriptions)| {
            self::write(collection, inscriptions).unwrap();
        });

    Ok(())
}
