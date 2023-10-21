use crate::Outpoint;
use ::serde::{Deserialize, Deserializer, Serialize, Serializer};
use anyhow::Result;
use bitcoin::Txid;
use std::{
    fmt::{self, Display, Formatter},
    str::FromStr,
};

#[derive(Debug, PartialEq, Clone, Hash, Eq)]
pub struct InscriptionId {
    pub outpoint: Outpoint,
}

pub(crate) struct DeserializeFromStr<T: FromStr>(pub(crate) T);

impl<'de, T: FromStr> Deserialize<'de> for DeserializeFromStr<T>
where
    T::Err: Display,
{
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        Ok(Self(
            FromStr::from_str(&String::deserialize(deserializer)?)
                .map_err(serde::de::Error::custom)?,
        ))
    }
}

impl InscriptionId {
    pub fn from_bytes(outpoint: Vec<u8>) -> InscriptionId {
        InscriptionId {
            outpoint: Outpoint::from_bytes(outpoint),
        }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        self.outpoint.to_bytes()
    }

    pub fn to_string(&self) -> String {
        let (txid, vout) = self.outpoint.decode();
        format!("{}i{}", txid, vout)
    }
}

impl<'de> Deserialize<'de> for InscriptionId {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        Ok(DeserializeFromStr::deserialize(deserializer)?.0)
    }
}

impl Serialize for InscriptionId {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        serializer.collect_str(self)
    }
}

impl Display for InscriptionId {
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        let (txid, vout) = self.outpoint.decode();
        write!(f, "{}i{}", txid, vout)
    }
}

impl FromStr for InscriptionId {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self> {
        if let Some(char) = s.chars().find(|char| !char.is_ascii()) {
            anyhow::bail!("{} invalid character: {}", s, char)
        }

        const TXID_LEN: usize = 64;
        const MIN_LEN: usize = TXID_LEN + 2;

        if s.len() < MIN_LEN {
            anyhow::bail!("{} invalid length: {}", s, s.len());
        }

        let txid = &s[..TXID_LEN];

        let separator = s.chars().nth(TXID_LEN).unwrap();

        if separator != 'i' {
            anyhow::bail!("{} invalid seperator: {}", s, separator);
        }

        let vout = &s[TXID_LEN + 1..];

        let txid: Txid = match txid.parse() {
            Ok(v) => v,
            Err(e) => anyhow::bail!("{} invalid txid: {}", s, e),
        };
        let vout: u32 = match vout.parse() {
            Ok(v) => v,
            Err(e) => anyhow::bail!("{} invalid vout: {}", s, e),
        };

        let outpoint = Outpoint::new(format!("{}", txid), vout).unwrap();

        Ok(InscriptionId::from_bytes(outpoint.to_bytes()))
    }
}
