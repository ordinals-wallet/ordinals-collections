import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { getDirectories } from './index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BATCH_SIZE = 60;
const BATCHES_BEFORE_DELAY = 750;
const BATCH_TIMEOUT_DELAY = 60000;

let currentBatchCount = 0;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function promiseAllInBatches(task, items, batchSize) {
  let position = 0;
  let results = [];
  while (position < items.length) {
    const itemsForBatch = items.slice(position, position + batchSize);
    results = [...results, ...await task(itemsForBatch)];
    position += batchSize;
    // process.stdout.write(`.`);
    // console.log(`${position} / ${items.length}`);
  }
  return results;
}

export const addInscriptionNumbers = async () => {
  let environment;
  try {
    const environmentRaw = await fs.readFileSync(path.resolve(__dirname, '../environment.json'));
    environment = JSON.parse(environmentRaw);
  } catch (e) {
    console.error('Error reading environment.json', e);
  }

  for(let collection of getDirectories(path.resolve(__dirname, '../collections/'))) {
    console.log(collection);
    let filePath = `../collections/${collection}/inscriptions.json`;
    let inscriptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath)));

    let task = async (inscriptions) => {
      // Skip inscriptions that already contain a number
      const inscriptionsToProcess = inscriptions.filter((i) => !i.number || i.number?.length === 0);

      const inscriptionIds = inscriptionsToProcess.map((i) => i.id?.toLowerCase());

      if (inscriptionIds.length > 0) {
        const inscriptionIdsString = inscriptionIds.map((id) => `&id=${id}`).join('');

        let json;
        let failed = false;
        try {
          json = await fetch(`https://api.hiro.so/ordinals/v1/inscriptions?limit=${BATCH_SIZE}${inscriptionIdsString}`, {
            headers: {
              'x-hiro-api-key': environment?.HIRO_API_KEY ?? null,
            }
          }).then(res => res.json());
        } catch {
          failed = true;
          console.log(`!! Failed`);
        }

        if (!failed && json?.results) {
          for (let i=0; i < json?.results.length; i+=1) {
            const result = json.results[i];
            if (result.id && result.number) {
              const existingInscriptionIndex = inscriptions.findIndex((i) => i.id.toLowerCase() === result.id.toLowerCase());
              if (existingInscriptionIndex !== -1) {
                inscriptions[existingInscriptionIndex] = {
                  ...inscriptions[existingInscriptionIndex],
                  number: result.number,
                };
              } else {
                console.log('!!  Existing inscription not found');
              }
            }
          }
        }

        currentBatchCount += 1;

        if ((currentBatchCount % BATCHES_BEFORE_DELAY) === 0) {
          console.log(`==== Hit ${BATCHES_BEFORE_DELAY} batches, waiting ${BATCH_TIMEOUT_DELAY}ms before continuing...`)
          await timeout(BATCH_TIMEOUT_DELAY);
        }

        console.log(`🤖 Processing batch ${currentBatchCount}`);
      }

      return inscriptions;
    };

    let transformedInscriptions = await promiseAllInBatches(task, inscriptions, BATCH_SIZE);
    fs.writeFileSync(path.resolve(__dirname, filePath), JSON.stringify(transformedInscriptions, null, 2));
  }
};