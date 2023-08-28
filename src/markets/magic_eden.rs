use crate::{
    collection::{Collection, Inscription, InscriptionMeta},
    InscriptionId,
};
use anyhow::Result;
use serde::*;
use serde_json::{json, Value};

pub struct MagicEden {}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct MagicEdenCollection {
    pub name: String,
    pub description: String,
    pub featured: MagicEdenInscription,
    pub inscriptions: MagicEdenInscriptionEdge,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct MagicEdenInscriptionEdge {
    pub edges: Vec<MagicEdenInscriptionNode>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct MagicEdenInscriptionNode {
    pub node: MagicEdenInscription,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct MagicEdenInscription {
    pub id: InscriptionId,
    pub inline: Option<String>,
}

impl MagicEden {
    pub fn get(url: String) -> reqwest::RequestBuilder {
        let client = reqwest::Client::new();
        client.get(format!("https://ordapi.bestinslot.xyz/v1{}", url))
    }

    pub async fn list_tokens(slug: &String, offset: i64) -> Result<String> {
        let path = format!("/get_collection/{}", slug);
        let res = MagicEden::get(path).send().await?.text().await?;
        Ok(res)
    }

    pub async fn get_collection(slug: &String) -> Result<()> {
        let tokens = MagicEden::list_tokens(slug, 0).await?;
        println!("tokens: {:#?}", tokens);

        Ok(())
    }

    //pub async fn get_collection(slug: &String) -> Result<(Collection, Vec<Inscription>)> {
    //let res = MagicEden::query(&body).await?;

    //let data = res.get("data").unwrap().get("collection").unwrap().clone();
    //let c: MagicEdenCollection = serde_json::from_value(data)?;

    //let collection = Collection {
    //name: c.name,
    //inscription_icon: Some(c.featured.id),
    //icon: None,
    //slug: slug.to_string(),
    //description: c.description,
    //twitter_link: None,
    //discord_link: None,
    //website_link: None,
    //};

    //let inscriptions: Vec<_> = c
    //.inscriptions
    //.edges
    //.iter()
    //.map(|e| Inscription {
    //id: e.node.id.clone(),
    //meta: Some(InscriptionMeta {
    //name: e.node.inline.clone(),
    //attributes: None,
    //}),
    //})
    //.collect();

    //Ok((collection, inscriptions))
    //}
}
