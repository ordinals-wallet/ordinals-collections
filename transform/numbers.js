import fs from 'fs';
import fetch from 'node-fetch';

const allowList = [
  'ordmojis',
  'ordinal-eggs',
  'piggies-world',
  'punks-on-bitcoin',
  'ordinal-phunks',
  'xcpinata',
  'ordinal-rabbits',
  'unordinals',
  'i2-punks',
  'nature-on-bitcoin',
  'ordinal-punks',
  'litecoin-punks',
  'ordinal-goros',
  'skullx-cyber-raiders',
  'glyphs',
  'astral-babes',
  'ordinal-diamonds',
  'sub10k',
  'pixel-pepes',
  'ordinaliens',
  'btc-artsy-monke',
  'banksy-star-set1',
  'bitcoin-boos',
  'eldersofcrypto',
  'chainspace',
  'super-early-ordies',
  'the-fiat-collection',
  'btc-machines',
  'cyber-ordinals',
  'ordinal-shards',
  'ordinal-birds',
  'megapunks'
];

async function promiseAllInBatches(task, items, batchSize) {
  let position = 0;
  let results = [];
  while (position < items.length) {
    const itemsForBatch = items.slice(position, position + batchSize);
    results = [...results, ...await Promise.all(itemsForBatch.map(item => task(item)))];
    position += batchSize;
    process.stdout.write(`.`);
    console.log(`${position} / ${items.length}`);
  }
  return results;
}

(async () => {
  for(let collection of allowList) {
    console.log(collection);
    let filePath = `../collections/${collection}/inscriptions.json`;
    let inscriptions = JSON.parse(fs.readFileSync(filePath));
    let task = async (inscription, attempts=5) => {
      if(inscription?.['number']) {
        inscription['number'] = inscription['number'].toString();
        return inscription;
      }
      let json;
      let failed = false;
      try {
        json = await fetch('https://turbo.ordinalswallet.com/inscription/'+inscription.id).then(res => res.json());
      } catch {
        failed = true;
        if(attempts > 0) return task(inscription, attempts-1);
      }
      if(!failed) inscription['number'] = json.num;
      return inscription;
    };
    let transformedInscriptions = await promiseAllInBatches(task, inscriptions, 100);
    fs.writeFileSync(filePath, JSON.stringify(transformedInscriptions, null, 2));
  }
})();