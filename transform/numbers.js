import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { getDirectories } from './index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export const addInscriptionNumbers = async () => {
  for(let collection of getDirectories(path.resolve(__dirname, '../collections/'))) {
    console.log(collection);
    let filePath = `../collections/${collection}/inscriptions.json`;
    let inscriptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath)));
    let task = async (inscription, attempts=3) => {
      if(inscription?.['number']) {
        inscription['number'] = inscription['number'].toString();
        return inscription;
      }
      let json;
      let failed = false;
      try {
        json = await fetch('https://turbo.ordinalswallet.com/inscription/'+inscription.id, {
          headers: {
            ['referer']: 'https://ordinalswallet.com/'
          }
        }).then(res => res.json());
      } catch {
        failed = true;
        if(attempts > 0) return task(inscription, attempts-1);
      }
      if(!failed) inscription['number'] = json.num?.toString();
      return inscription;
    };
    let transformedInscriptions = await promiseAllInBatches(task, inscriptions, 1000);
    fs.writeFileSync(path.resolve(__dirname, filePath), JSON.stringify(transformedInscriptions, null, 2));
  }
};