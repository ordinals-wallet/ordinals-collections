import fs from 'fs';
import fetch from 'node-fetch';

const allowList = [
  "0rdinals-bitgoatz",
  "astral-babes",
  "banksy-star-set1",
  "bbgc",
  "benjamins-cartel-btc",
  "bitcoin-boos",
  "bitcoin-frogs",
  "bitcoin-ghcrystals",
  "bitcoin-wizards",
  "bitcoinswords",
  "bitcorns",
  "btc-artsy-monke",
  "btc-machines",
  "chainspace",
  "cyber-ordinals",
  "degods",
  "eldersofcrypto",
  "extraordinal-punks",
  "glyphs",
  "goldrush",
  "i2-punks",
  "interordinals",
  "litecoin-punks",
  "maxis",
  "megapunks",
  "nature-on-bitcoin",
  "ordinal-birds",
  "ordinal-camels",
  "ordinal-cars",
  "ordinal-diamonds",
  "ordinal-eggs",
  "ordinal-games",
  "ordinal-goros",
  "ordinal-lfgods",
  "ordinal-moon-rocks",
  "ordinal-phunks",
  "ordinal-portraits",
  "ordinal-punks",
  "ordinal-rabbits",
  "ordinal-shards",
  "ordinal-strikers",
  "ordinaliens",
  "ordirobots",
  "ordmojis",
  "piggies-world",
  "pixel-pepes",
  "pixelbirds-sparrow",
  "punks-on-bitcoin",
  "satoshi-punks",
  "satoshi-shellz",
  "satoshi_go",
  "skullx-cyber-raiders",
  "sub10k",
  "super-early-ordies",
  "the-fiat-collection",
  "twelvefold",
  "undrwrld-archetype",
  "unordinals",
  "wozos-legends",
  "wtf-tokyo-ord",
  "xcopy-grifters",
  "xcpinata"
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
    let transformedInscriptions = await promiseAllInBatches(task, inscriptions, 500);
    fs.writeFileSync(filePath, JSON.stringify(transformedInscriptions, null, 2));
  }
})();