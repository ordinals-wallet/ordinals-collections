use crate::{
    collection::{Collection, Inscription, InscriptionMeta},
    InscriptionId,
};
use anyhow::Result;
use serde::*;
use serde_json::{json, Value};

pub struct Ordswap {}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct OrdswapCollection {
    pub name: String,
    pub description: String,
    pub featured: OrdswapInscription,
    pub inscriptions: OrdswapInscriptionEdge,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct OrdswapInscriptionEdge {
    pub edges: Vec<OrdswapInscriptionNode>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct OrdswapInscriptionNode {
    pub node: OrdswapInscription,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct OrdswapInscription {
    pub id: InscriptionId,
    pub inline: Option<String>,
}

impl Ordswap {
    pub fn post() -> reqwest::RequestBuilder {
        let client = reqwest::Client::new();
        client.post("http://graphql.ordswap.io/")
    }

    pub async fn query(payload: &Value) -> Result<Value> {
        Ok(Ordswap::post().json(payload).send().await?.json().await?)
    }

    pub async fn get_collection(slug: &String) -> Result<(Collection, Vec<Inscription>)> {
        let body = json!({
                    "operationName": "CollectionPage",
                    "query": "query CollectionPage($slug: String!) {\n  collection(slug: $slug) {\n    name\n    featured {\n      ...InscriptionWithCollection\n      __typename\n    }\n    description\n    inscriptions {\n      totalCount\n      edges {\n        node {\n          ...Inscription\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  activity2(slug: $slug) {\n    count\n    activity {\n      price\n      inscription {\n        ...Inscription\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\nfragment InscriptionWithCollection on Inscription {\n  ...Inscription\n  collection {\n    slug\n    name\n    __typename\n  }\n  collections {\n    slug\n    name\n    __typename\n  }\n}\nfragment Inscription on Inscription {\n  id\n  number\n  ct\n  inline\n  preview\n  satsName\n  bitmap\n  isBrc20\n  order {\n    amount\n    __typename\n  }\n}"
        ,
                    "variables": { "slug": slug }
                });

        let res = Ordswap::query(&body).await?;

        let data = res.get("data").unwrap().get("collection").unwrap().clone();
        let c: OrdswapCollection = serde_json::from_value(data)?;

        let collection = Collection {
            name: c.name,
            inscription_icon: Some(c.featured.id),
            icon: None,
            slug: slug.to_string(),
            description: c.description,
            twitter_link: None,
            discord_link: None,
            website_link: None,
        };

        let inscriptions: Vec<_> = c
            .inscriptions
            .edges
            .iter()
            .map(|e| Inscription {
                id: e.node.id.clone(),
                meta: Some(InscriptionMeta {
                    name: e.node.inline.clone(),
                    attributes: None,
                }),
            })
            .collect();

        Ok((collection, inscriptions))
    }
}
