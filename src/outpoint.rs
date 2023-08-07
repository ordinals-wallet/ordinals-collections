use anyhow::Result;

#[derive(Debug, PartialEq, Clone, Hash, Eq)]
pub struct Outpoint {
    pub data: Vec<u8>,
}

impl Outpoint {
    pub fn from_bytes(data: Vec<u8>) -> Outpoint {
        Outpoint { data }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        self.data.clone()
    }

    pub fn decode(&self) -> (String, u32) {
        let slice = self.data.as_slice();
        let mut txid = slice[0..32].to_vec();
        txid.reverse();

        let arr: [u8; 4] = [slice[32], slice[33], slice[34], slice[35]];
        let vout = u32::from_le_bytes(arr);

        (hex::encode(txid), vout)
    }

    pub fn new(txid: String, vout: u32) -> Result<Outpoint> {
        let mut buf = Vec::new();
        let mut txid = hex::decode(txid)?;
        txid.reverse();

        buf.extend(txid);
        buf.extend(vout.to_le_bytes());

        Ok(Outpoint { data: buf })
    }

    pub fn from_bitcoin_outpoint(outpoint: bitcoin::OutPoint) -> Outpoint {
        let mut bytes = vec![];
        bytes.extend_from_slice(&outpoint.txid.as_hash().to_vec());
        bytes.extend_from_slice(&outpoint.vout.to_le_bytes());
        Outpoint::from_bytes(bytes)
    }

    pub fn to_bitcoin_outpoint(&self) -> Result<bitcoin::OutPoint> {
        let (txid, vout) = self.decode();
        Ok(bitcoin::OutPoint::new(txid.parse()?, vout))
    }
}
