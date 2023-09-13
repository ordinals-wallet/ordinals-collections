use anyhow::Result;

pub mod collection;
pub use collection::*;

pub mod inscription_id;
pub use inscription_id::*;

pub mod outpoint;
pub use outpoint::*;

pub mod markets;
pub use markets::*;

#[tokio::main]
async fn main() -> Result<()> {
    collection::reformat()?;
    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn valid_collections() -> Result<()> {
        let (_, errors) = collection::list()?;

        for error in &errors {
            println!("{}", error);
        }

        if errors.len() > 0 {
            anyhow::bail!("");
        }

        let (_, errors) = collection::list_inscriptions()?;

        for error in &errors {
            println!("{}", error);
        }

        if errors.len() > 0 {
            anyhow::bail!("");
        }

        Ok(())
    }
}
