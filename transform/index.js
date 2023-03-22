import fs from 'fs';
import fetch from 'node-fetch';
import api from 'api';
import { addInscriptionNumbers } from './numbers.js';

const sdk = api('@reservoirprotocol/v2.0#9dy1olfh4mtzp');
sdk.auth('demo-api-key');

const delay = ms => {
  return new Promise(res => setTimeout(res, ms))
}

let toTransform = [
  {
    meta: {
      name: 'Ordmojis',
      inscription_icon: 'ac63030375adc63e02876fcedf5145fe90a86ecfc3cf754396db30cb263f75b0i0',
      supply: '1870',
      slug: 'ordmojis',
      description: 'The first of each official Unicode Emoji to be inscribed on bitcoin',
      twitter_link: '',
      discord_link: '',
      website_link: 'https://ordmojis.com/'
    },
    inscriptions: JSON.parse(fs.readFileSync('./ordmojis.json')),
    method: 'ordmojis'
  },
  {
    meta: {
      name: "Litecoin Punks",
      inscription_icon: "60f137a86bcc10bb55d45ceff8a10405a0c1da778c5de3b8a3c010464e6b8b5ai0",
      supply: "100",
      slug: "litecoin-punks",
      description: "Litecoin Punks are a collection of 100 early Litecoin Ordinals with inscriptions #642 to #834.",
      twitter_link: "https://twitter.com/LitecoinPunks",
      discord_link: "https://discord.gg/litecoinpunks",
      website_link: ""
    },
    inscriptions: JSON.parse(fs.readFileSync('./litecoin-punks.json')),
    method: 'litecoin-punks'
  },
  {
    meta: {
      name: "sub10k",
      inscription_icon: "765cf24db22df4d7bae1cd12e5ee4780dc263486e426d8d1758eaa0515fa6fcei0",
      supply: "10000",
      slug: "sub10k",
      description: "sub10k is a collection of the first 10,000 inscriptions on Bitcoin.",
      twitter_link: "https://twitter.com/sub10k",
      discord_link: "https://discord.gg/sub10k",
      website_link: ""
    },
    inscriptions: JSON.parse(fs.readFileSync('./sub10k.json')),
    method: 'sub10k'
  },
  {
    meta: {
      name: "Chainspace",
      inscription_icon: "a6e1a0f1dea5ac2f1eb366db2d037bdcfcbd6adfc88f91456656ae7848b049c0i0",
      supply: "800",
      slug: "chainspace",
      description: "Chainspace is a BTC-native infinite art machine — a fully on-chain, stateless web app that transforms the viewer into generative art. In Chainspace, you are the art.",
      twitter_link: "https://twitter.com/chainspaceapp",
      discord_link: "https://discord.gg/chainspace",
      website_link: "https://chainspace.app"
    },
    inscriptions: fs.readFileSync('./chainspace.csv', 'utf8'),
    method: 'chainspace'
  },
  {
    meta: {
      name: "Twelvefold",
      inscription_icon: "e0b63360759c7e208b5e201156008fa1ef0199b404363bfafe46e8933d079efci0",
      supply: "300",
      slug: "twelvefold",
      description: "TwelveFold by Yuga Labs is a limited edition collection of 300 generative pieces, inscribed on satoshis on the Bitcoin blockchain.",
      twitter_link: "https://twitter.com/yugalabs",
      website_link: "https://twelvefold.io"
    },
    inscriptions: await fetch('https://turbo.ordinalswallet.com/wallet/bc1pshdmgmkt6pgw56mz94h5y2at4ryuug0ehpz8vg3lnf90xxkr356sjcazc7/inscriptions').then(res => res.json()),
    method: 'twelvefold'
  },
  {
    meta: {
      name: 'Bitcoin Apes',
      inscription_icon: 'db1593d1991ae3a28a6b6cf25d418f08ac74700971253bdf4312009ca76b3ed7i0',
      supply: '10000',
      slug: 'bitcoinapes',
      description: 'BITCOIN APES are byte-perfect inscriptions of the original Bored Ape Yacht Club to the Bitcoin blockchain using Ordinals. They are fully on-chain, Bitcoin native, and completely decentralized digital artifacts.',
      twitter_link: 'https://twitter.com/BitcoinApes_',
      discord_link: 'https://discord.gg/bitcoin-apes',
      website_link: 'https://bitcoinapes.com/'
    },
    inscriptions: {},
    method: 'bitcoinapes'
  }
]

let transformMethods = {
  ordmojis: (collection) => {
    let transformed = [];
    let lowest = collection.inscriptions.lowestEmojis;
    for(let ordmoji of Object.keys(lowest)) {
      let info = lowest[ordmoji];
      transformed.push({
        id: info.id,
        number: `${info.num}`,
        meta: {
          name: `Ordmoji - ${ordmoji}`
        }
      });
    }
    return transformed;
  },
  ['litecoin-punks']: (collection) => {
    let transformed = [];
    let inscriptions = collection.inscriptions;
    let i = 1;
    for(let [number, inscription] of Object.entries(inscriptions)) {
      transformed.push({
        id: inscription,
        number: `${number}`,
        meta: {
          name: `Litecoin Punk #${i}`
        }
      });
      i++;
    }
    return transformed;
  },
  ['sub10k']: (collection) => {
    return collection.inscriptions;
  },
  ['twelvefold']: async (collection) => {
    return;

    let transformed = [];

    let toSkip = [
      '7cf53a334f0bef4fb372a81fe65b063311553f9a7d4261c6787d3399ac79b4fdi0',
      '50e74f16f8f4f18c29e572ed466dde40a0878f30db6745467841e73b2f96ab34i0',
      'f0aa71ae4ca4382ed6f18d6c300d1810ffda8ba94f6801851edc6e0892045019i0',
      '955d668f961d5fb18fd935041f3b4ff2ddcbd3bebe719f86a94caa51fc9a78adi0',
      '474b8abbc9779f3a77654501873900ed14bf62360fa0fc8d325714c7c4e891bdi0',
      '7d1a9be4e4129b2663f99f7f6ff4cb185601ec32c040666b01ab0119f875fcbei0',
      '3fbaee7a19170d64aa72108e7159af5a3ba97f6926674ed7b21de203c14011c1i0',
      'edbbbac920a2b54866d0ec40f1e5d58a98acab736a50f1ac6aa1f3b1a9e55f8ei0',
      'f723c9c13a213b77ff72df832a7f6dd6dee42222673e744ab592debd3ddcaea5i0',
      '684e880def0563d002182361686bc7f33fc07ba833082ca1c8b1c552b27d63f1i0',
      'b03009572b1632c0da785fa4550c06767a4da7a0d41ed5c0f5f040043fb6d53ai0',
      '689ea60e481bac430ca57391517a7e21aaf9eb9bbb60b576b3656dc8d8acdb0fi0'
    ];

    let included  = [];

    for (const item of collection.inscriptions.reverse()) {
      let inscriptionHash = item.id;
      console.log(inscriptionHash);
      if(toSkip.includes(inscriptionHash) || included.includes(inscriptionHash) || !inscriptionHash) continue;
      let numberMatch = item.num;
      included.push(inscriptionHash);
      console.log(numberMatch);
      transformed.push({
        id: inscriptionHash,
        meta: {
          name: `Inscription #${numberMatch}`
        }
      });
    }

    console.log(transformed.length);
    return transformed;
  },
  ['chainspace']: (collection) => {
    let csv = collection.inscriptions+"}";
    let rows = csv.split("\n");
    let transformed = [];
    for(let row of rows) {
      row = row.replace(/\"\"/g, '"').slice(0,-1);
      let cells = row.split(",");
      cells = cells.map((cell, i) => {
        if(i == 0) return cell;
        return cell.slice(1,-1);
      });
      let inscriptionId = cells[0];
      cells.splice(5,4);
      let meta = JSON.parse(cells.slice(1).join(","));
      transformed.push({
        id: inscriptionId,
        meta: meta
      });
    };
    return transformed;
  },
  ['bitcoinapes']: async (collection) => {
    let transformed = [];
    let dir = '../collections/'+collection.meta.slug;
    let attributes = {};

    if(!fs.existsSync(dir+'/attributes.json')) {
      let continuation;
      let first = true;

      while(continuation || first) {
        let response = await sdk.getTokensV5({
          collection: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
          includeAttributes: 'true',
          accept: '*/*',
          limit: 100,
          continuation: continuation
        });

        for(let tokenItem of response.data.tokens) {
          let tokenAttributes = [];
          for(let attribute of tokenItem.token.attributes) {
            if(attribute.key == 'ApeCoin Staked') continue;
            tokenAttributes.push({
              trait_type: attribute.key,
              value: attribute.value
            });
          }
          attributes[tokenItem.token.tokenId] = tokenAttributes;
        }

        continuation = response.data.continuation;
        first = false;
        console.log(Object.keys(attributes).length);
        await delay(100);
      }

      fs.writeFileSync(dir+'/attributes.json', JSON.stringify(attributes));
    } else {
      attributes = JSON.parse(fs.readFileSync(dir+'/attributes.json'));
    }

    let response = await fetch('https://ordinals.hasura.app/api/rest/bitcoinapes_inscription_provenance').then(res => res.json());
    let provenance = response['provenance'];

    for(let inscription of provenance) {
      let itemAttributes = attributes[inscription['token_id'].toString()];
      if(inscription['inscriptions'].length == 0) continue;

      transformed.push({
        id: inscription['inscriptions'][0]['inscription']['id'],
        meta: {
          name: "Bitcoin Ape #"+inscription['token_id'],
          attributes: itemAttributes
        }
      });
    }

    return transformed;
  }
};

(async () => {
  for(let collection of toTransform) {
    console.log("Transforming "+collection.meta.slug);
    let meta = collection.meta;
    let dir = '../collections/'+meta.slug;
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
    fs.writeFileSync(dir+"/meta.json", JSON.stringify(meta, undefined, 2));

    let method = transformMethods[collection.method];
    let transformed = await method(collection);

    if(transformed) fs.writeFileSync(dir+"/inscriptions.json", JSON.stringify(transformed, undefined, 2));
  }

  await addInscriptionNumbers();
})();