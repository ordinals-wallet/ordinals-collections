# Ordinals Collections Standards
#### A place for creators &amp; builders to organize ordinal collections!

## Getting Started
***Artists***

Collection creators can format their collection data using the `inscription.json` and `meta.json` format below to be listed on all platforms using the standard! 

***Steps***
1. Create your `inscription.json` and `meta.json` files in the format provided below
2. Add to the registry by creating a pull request including new collections that follow the standard
2. Websites can use the registry to include the ordinal collections provided on their websites!


## File Structure
```
 .
 ├── ...
 └── collection-name            
     ├── inscriptions.json      
     └── meta.json              
```

## Collection Metadata `meta.json`
```
{
  "name": "",                    # inscription name
  "inscription_icon": "",        # collection cover inscription id
  "supply": "",                  # total supply
  "slug": "",                    # directory name
  "description": "",             # collection description
  "twitter_link": "",            # official twitter
  "discord_link": "",            # official discord
  "website_link": ""             # official website
}
```

## Inscription Data `inscriptions.json`
```
[
  {
    "id": "",                    # inscription id
    "meta": { 
      "name": ""                 # inscription name
    }
  },
  ...
]
```

## Expanding Inscription Data
Collections can be organized using `status` and `rank`
```
[
  {
    "id": "",
    "meta": {
      "name": "",
      "status": "",               # inscription theme
      "rank":                     # inscription rarity rank
    }
  },
  ...
]
```
Artists can assign unqiue traits to ordinals with `attributes`
```
[
  {
    "id": "",
    "meta": {
      "status": "",
      "rank": ,
      "name": ""
      "attributes": [
        {
          "trait_type": "",        # trait category
          "value": "",             # trait value
          "status": "",            # trait theme
          "percent": ""            # percent of inscriptions in collection with trait
        },
        ...
      ]
    }
  },
  ...
]
```



***Here is an example of a completed collection inscription***

Your meta.json file will look like this:
```
{
  "name": "Planetary Ordinals",
  "inscription_icon": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9i0",
  "supply": "69",
  "slug": "planetary-ordinals",
  "description": "",
  "twitter_link": "https://twitter.com/ordinalswallet",
  "discord_link": "https://discord.com/invite/ordinalswallet",
  "website_link": ""
}
```

Your inscriptions.json file will look like this:
```
[
  {
    "id": "af0b19432a676551223e300e7197348b7c225cb7b31d0d7c6e246e382cbf6f81i0",
    "meta": {
      "name": "Planetary Ordinal #11",
      "status": "Rare",
      "rank": 8,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sun sun",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "rose blossom",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "9f0bfadb03c137c54d2a77768f61691eee2ccf64ad307109b92c14b76d73c28ai0",
    "txid": "9f0bfadb03c137c54d2a77768f61691eee2ccf64ad307109b92c14b76d73c28a",
    "pow_hash": "04756eaf85c9589b1063ded54ba59621a5e950535316c2d3344d18ef13359419",
    "owner": "mksala#0144 ",
    "meta": {
      "name": "Planetary Ordinal #7",
      "status": "Common",
      "rank": 58,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "grey skies",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "0a018e711422ad7dbddbab59d1b111a6eae6d407fffe33f4c42107a840d4f3efi0",
    "txid": "0a018e711422ad7dbddbab59d1b111a6eae6d407fffe33f4c42107a840d4f3ef",
    "pow_hash": "052bfcdb06cef1c14ac102410d4e9536c01c5ce9ad731b7c5b21eb55474af440",
    "owner": "mksala#0144 ",
    "meta": {
      "name": "Planetary Ordinal #67",
      "status": "Uncommon",
      "rank": 27,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Horizon",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "70f86f36af876b16fc67ba3771095d94aa704ab37481cc0333966f08cde7c744i0",
    "txid": "70f86f36af876b16fc67ba3771095d94aa704ab37481cc0333966f08cde7c744",
    "pow_hash": "0811f83763bc2d699cf05c70d4143c5db6d3c21a0456202c7c5e2c5c6fd1dcf5",
    "owner": "mksala#0144 ",
    "meta": {
      "name": "Planetary Ordinal #22",
      "status": "Epic",
      "rank": 4,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sugar sweet",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "759974ab9d22955ba6c69d0997ae0f4902a790b104ae6cf40a5a372b68fecebai0",
    "txid": "759974ab9d22955ba6c69d0997ae0f4902a790b104ae6cf40a5a372b68feceba",
    "pow_hash": "0a7e5861b26b33de370857eefcb79f1cce0f1d092f3a0b596873612602a7d41d",
    "owner": "8370",
    "meta": {
      "name": "Planetary Ordinal #1",
      "status": "Common",
      "rank": 46,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "skies working",
          "status": "Legendary",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "ddbd767b66bc054bef3910f2fa01e543976f33baaa427a864b43095b939bbd56i0",
    "txid": "ddbd767b66bc054bef3910f2fa01e543976f33baaa427a864b43095b939bbd56",
    "pow_hash": "206214cde7637092045a88231e0f425fc05ba679f457aa642258cbdcfe5c178d",
    "owner": "300 ",
    "meta": {
      "name": "Planetary Ordinal #61",
      "status": "Epic",
      "rank": 6,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Grey stays",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "earthy vibes",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "94534dd9e91f13953fc98dff06b6f194097298596f20d84abdbe8600d8d20425i0",
    "txid": "94534dd9e91f13953fc98dff06b6f194097298596f20d84abdbe8600d8d20425",
    "pow_hash": "23b1fdb4716e56b457e892bde96d8b6e673b4ae914d4fcf09bcca02cc16339b5",
    "owner": "565 Я.#4163",
    "meta": {
      "name": "Planetary Ordinal #23",
      "status": "Uncommon",
      "rank": 19,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Bloody ice",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "air weave",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "bdffb15e0ea6cbbbcc5b3e57f7c550efb1ac082c7ba53bac9f7fa14b729cf595i0",
    "txid": "bdffb15e0ea6cbbbcc5b3e57f7c550efb1ac082c7ba53bac9f7fa14b729cf595",
    "pow_hash": "248c7622c9e7b2d318d4fb31f6221a4cf4ae0d7629de4b5981dcb885640a1eec",
    "owner": "Walkabout | kad.eth#0675",
    "meta": {
      "name": "Planetary Ordinal #46",
      "status": "Rare",
      "rank": 14,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Vanilla ice",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "80b4b07543006624df60d7595a8a634180dbbc63931a8cf5f2ba1add02d76661i0",
    "txid": "80b4b07543006624df60d7595a8a634180dbbc63931a8cf5f2ba1add02d76661",
    "pow_hash": "2556d162ad6fb93c4d9844d8c809b1c80cc7cfa7deed983c4562885084731cc5",
    "owner": "Megosh 70305",
    "meta": {
      "name": "Planetary Ordinal #49",
      "status": "Rare",
      "rank": 15,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Ice wall",
          "status": "Rare",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "1f769789b2bb6821cd9efd60a9ceb327ff0eaad3f62a106c7e5ac12ca9e9eb62i0",
    "txid": "1f769789b2bb6821cd9efd60a9ceb327ff0eaad3f62a106c7e5ac12ca9e9eb62",
    "pow_hash": "2e7257d66baa5fbafe763a7eb91bee9e901e2d1714bd55754f094c3e32528fa0",
    "owner": "64067 init_infinity#0910",
    "meta": {
      "name": "Planetary Ordinal #38",
      "status": "Common",
      "rank": 49,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "princess drip",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "095de9f14e5013b16b26214df1612bc931dc1cc37b645138028d6da0d0bb700ci0",
    "txid": "095de9f14e5013b16b26214df1612bc931dc1cc37b645138028d6da0d0bb700c",
    "pow_hash": "31039d48899f373e2822df2c1278f70702aa405c42d7fcbbf26be668e6e7fbd9",
    "owner": "jokie#4914",
    "meta": {
      "name": "Planetary Ordinal #18",
      "status": "Uncommon",
      "rank": 18,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Horizon",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sunny day",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "c4755d6948f1586968661759b90655e0deb11235362b47a8f67619953df24c99i0",
    "txid": "c4755d6948f1586968661759b90655e0deb11235362b47a8f67619953df24c99",
    "pow_hash": "3450d106db3603e04ab73ed3bf28c4cd95f4d4718f2a84ed0dab232ac3941b0d",
    "owner": "sup.metaverse#7145 106794",
    "meta": {
      "name": "Planetary Ordinal #51",
      "status": "Rare",
      "rank": 11,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Earthy vibes",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "purple sky",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "a0db132c57ce7d23ce1a19b3a43af562a978c172aa3fde208a846bde6691d96di0",
    "txid": "a0db132c57ce7d23ce1a19b3a43af562a978c172aa3fde208a846bde6691d96d",
    "pow_hash": "37701aea7025ef6eb16854c45f33dbb153fa017e468be3c754bf636035822dd3",
    "owner": "Carbonz@4853",
    "meta": {
      "name": "Planetary Ordinal #64",
      "status": "Uncommon",
      "rank": 26,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Caterpillar ovaries",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "91332ca48d3554acac9dc673089b77abb79428de717972c8765cee8547795bd2i0",
    "txid": "91332ca48d3554acac9dc673089b77abb79428de717972c8765cee8547795bd2",
    "pow_hash": "3d3d6d90cbba4ce3bca774617fa968a1644ef9a9c37d758ef3cce9cd0d449c91",
    "owner": "Carbonz@4853",
    "meta": {
      "name": "Planetary Ordinal #54",
      "status": "Common",
      "rank": 44,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future vibes",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "0fd0635dfd3cf5815b5ce29bde3cd77f17759f2c97c94bce84132af9d917abcbi0",
    "txid": "0fd0635dfd3cf5815b5ce29bde3cd77f17759f2c97c94bce84132af9d917abcb",
    "pow_hash": "3e8612b96d331ee51c800f1d485bd4cbf83e3116e176bdc1d24ce41860ec973f",
    "owner": "Brissiaud (🦐,🦐)#2979",
    "meta": {
      "name": "Planetary Ordinal #50",
      "status": "Common",
      "rank": 36,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Earthy vibes",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "bb85b18158202070ebabfb9846ef2e6203241cd22381c018232fa685215fd4cci0",
    "txid": "bb85b18158202070ebabfb9846ef2e6203241cd22381c018232fa685215fd4cc",
    "pow_hash": "47558de1ce819e2743df2a2ca1e3468be339cc2ee9137f222bd16cc3b8d55708",
    "owner": "KW u/33014",
    "meta": {
      "name": "Planetary Ordinal #69",
      "status": "Rare",
      "rank": 13,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Icey rares",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "air bender",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "9f295fcc0be32d3cc41d6fe419e2d4985755bc608538f7ea86ffea2c58c9e821i0",
    "txid": "9f295fcc0be32d3cc41d6fe419e2d4985755bc608538f7ea86ffea2c58c9e821",
    "pow_hash": "477ea661a877104a2cf1c9b0904411c25da40871c0794a896926ce85b9a22640",
    "owner": "SellTheGreed#9519",
    "meta": {
      "name": "Planetary Ordinal #13",
      "status": "Rare",
      "rank": 17,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Dark and ugly",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "happy times",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "7ca91509b709fdfa0b160295bccbe3bf992f444f695ea6b20d69b02bda3a89fdi0",
    "txid": "7ca91509b709fdfa0b160295bccbe3bf992f444f695ea6b20d69b02bda3a89fd",
    "pow_hash": "4f30d07897a776e83ffc94a0fd1d25469e2faeb036c97f15be7207290b68df9a",
    "owner": "Brissiaud (🦐,🦐)#2979",
    "meta": {
      "name": "Planetary Ordinal #12",
      "status": "Rare",
      "rank": 9,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Icey rares",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "fire",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "e7c5ac3a6d04e66c785b3704d1c27aaed33df420272f2f0e8bc99118375ec477i0",
    "txid": "e7c5ac3a6d04e66c785b3704d1c27aaed33df420272f2f0e8bc99118375ec477",
    "pow_hash": "5917098f54070b600cb0699175ce79ed6b6485139126677c9b23dfd4e4ce0d3b",
    "owner": "51435",
    "meta": {
      "name": "Planetary Ordinal #9",
      "status": "Common",
      "rank": 48,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sun sun",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "6dcaa4e184ff0f6c6407dee996d096f640321fa0184a29ea39d60eec81c8f517i0",
    "txid": "6dcaa4e184ff0f6c6407dee996d096f640321fa0184a29ea39d60eec81c8f517",
    "pow_hash": "5b9de05a6958e718414ec24bfbefcbc7eb979e3578286970bc7cba01e5f8b15d",
    "owner": "Eiichiro @6621",
    "meta": {
      "name": "Planetary Ordinal #65",
      "status": "Legendary",
      "rank": 1,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness three",
          "status": "Rare",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sweet rain",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "aea7ebc88268a669b1899134d2fb1775b89b84a38d4c51a25ab1482c2e134de3i0",
    "txid": "aea7ebc88268a669b1899134d2fb1775b89b84a38d4c51a25ab1482c2e134de3",
    "pow_hash": "5c72686355bc748f4a7be3bf27db96a3ee71ad3a6556db9841ea1b587ab451e6",
    "owner": "42154",
    "meta": {
      "name": "Planetary Ordinal #25",
      "status": "Uncommon",
      "rank": 20,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Blind sights",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "grasshopper",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "7f2a20d1a1e65fdf4791a31a597618472a49abd792bb5e7c12fea3de904214bei0",
    "txid": "7f2a20d1a1e65fdf4791a31a597618472a49abd792bb5e7c12fea3de904214be",
    "pow_hash": "5e55e8e15b46d5001cecbdbf9de357930e8c98a216cbfa4a69226fd18a5e97f8",
    "owner": "25787",
    "meta": {
      "name": "Planetary Ordinal #31",
      "status": "Common",
      "rank": 52,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "air bender",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "e9dd57d70ce95daf70846e66ef4be197cef0f35eed9aea80b460601c6098417ei0",
    "txid": "e9dd57d70ce95daf70846e66ef4be197cef0f35eed9aea80b460601c6098417e",
    "pow_hash": "5fdcdd9de43c905475b8dc7953692944c6d5a271238005acbefeee408bc48cf2",
    "owner": "41878",
    "meta": {
      "name": "Planetary Ordinal #20",
      "status": "Uncommon",
      "rank": 29,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Dark and ugly",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "f66610d96fddf595a3ccfeb988d06533c3182dbfac5cc388188d90fd0ec62ce3i0",
    "txid": "f66610d96fddf595a3ccfeb988d06533c3182dbfac5cc388188d90fd0ec62ce3",
    "pow_hash": "609cc7d5b10fe5337359a1a095fc5a1c196b37075f51cc45357ab945edd28882",
    "owner": "41281 ooAwakening",
    "meta": {
      "name": "Planetary Ordinal #53",
      "status": "Uncommon",
      "rank": 22,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunny deez",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "iceland",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "85fb76bcfa934ba6d4f29e75477bad422f728d0c27eb02ea7854f021ea371bc5i0",
    "txid": "85fb76bcfa934ba6d4f29e75477bad422f728d0c27eb02ea7854f021ea371bc5",
    "pow_hash": "630a86003278b9a77898528a716c27f100786d085abb3e0690d7b3028fe02b9b",
    "owner": "47797",
    "meta": {
      "name": "Planetary Ordinal #33",
      "status": "Common",
      "rank": 35,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Purple rain",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "180330ecdd735ec69f8412ca65b3caea4bd994cc48b7a3e58c8f88c6414bf2cdi0",
    "txid": "180330ecdd735ec69f8412ca65b3caea4bd994cc48b7a3e58c8f88c6414bf2cd",
    "pow_hash": "71b1a70f026ef32d1bcdbf5347ed968328e8bb73172f58699cfdf0f1c1c34153",
    "owner": "75626",
    "meta": {
      "name": "Planetary Ordinal #8",
      "status": "Common",
      "rank": 68,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "f7b38ecfbaae6b0f592604434a0313eb54de47cb34822c9c10349943459f3c08i0",
    "txid": "f7b38ecfbaae6b0f592604434a0313eb54de47cb34822c9c10349943459f3c08",
    "pow_hash": "73522a5c455cfeb71f19aa8ee4da7a99b2eaa6821f1ddb4b78006326692f4d65",
    "owner": "41854",
    "meta": {
      "name": "Planetary Ordinal #17",
      "status": "Common",
      "rank": 65,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "14974c546303bf1320743dd8c2e63b23091e47aeaaf65e3d25319639d839e9cei0",
    "txid": "14974c546303bf1320743dd8c2e63b23091e47aeaaf65e3d25319639d839e9ce",
    "pow_hash": "775000c8ee64233f3f0e7d3e5e35277a80d7e426f05429b2375198067a147cf7",
    "owner": "crustyllama#0857",
    "meta": {
      "name": "Planetary Ordinal #68",
      "status": "Common",
      "rank": 39,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Grey stays",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "a4a4a2f4ed24bdafc76cf9433ac7f76550a9cd86a0b306e40399cebcfd41e868i0",
    "txid": "a4a4a2f4ed24bdafc76cf9433ac7f76550a9cd86a0b306e40399cebcfd41e868",
    "pow_hash": "797a3282a4efda751a71cad7e35367566e9604274fda565c320dedadfffe779e",
    "owner": "crustyllama#0857",
    "meta": {
      "name": "Planetary Ordinal #35",
      "status": "Uncommon",
      "rank": 21,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Red snow",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sunny day",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "0782cbdfad58eef6a5053cbbf3245558dff8d02ece1e694032e5d9693c7c4fdfi0",
    "txid": "0782cbdfad58eef6a5053cbbf3245558dff8d02ece1e694032e5d9693c7c4fdf",
    "pow_hash": "7984d7529ad0b6992e322febcd08bf72d12ff39558b62b36dab33d0e9167b98f",
    "owner": "Constant GMI 568",
    "meta": {
      "name": "Planetary Ordinal #5",
      "status": "Rare",
      "rank": 16,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future kinds",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "red snow",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "cfec0fbd2ea712cf86cc13703a57f5b7a4c636da232fe8c3a4959524319b0328i0",
    "txid": "cfec0fbd2ea712cf86cc13703a57f5b7a4c636da232fe8c3a4959524319b0328",
    "pow_hash": "798677e196beade40fb093c56df5bfb747b4c30d3e2f93764c6ede0e9d50b736",
    "owner": "Constant GMI 568",
    "meta": {
      "name": "Planetary Ordinal #66",
      "status": "Uncommon",
      "rank": 25,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Red snow",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "grey skies",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "b3aaad294a7c48be6730e80410bb0f62141c27cd485b42f9d6aa4f1669fa226ai0",
    "txid": "b3aaad294a7c48be6730e80410bb0f62141c27cd485b42f9d6aa4f1669fa226a",
    "pow_hash": "7c57ac973eba1f053c26dd31e208893f25f18e3370d7c922bb0fb38a85d39b6b",
    "owner": "551",
    "meta": {
      "name": "Planetary Ordinal #30",
      "status": "Common",
      "rank": 61,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "red snow",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "79fa348c23fbb10282f6e4e78e2605bdfce51d263140bbc93a6ef19b7af2632ci0",
    "txid": "79fa348c23fbb10282f6e4e78e2605bdfce51d263140bbc93a6ef19b7af2632c",
    "pow_hash": "7d92f9572d1ba580df9686d181dc46da192b01b970a77a4e9a6b9de1f6c3d672",
    "owner": "36487",
    "meta": {
      "name": "Planetary Ordinal #55",
      "status": "Common",
      "rank": 37,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Blind sights",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "87fff1ce9cf526c51d42567c7b8c2f57528c7e83f08519775be989c744288ceei0",
    "txid": "87fff1ce9cf526c51d42567c7b8c2f57528c7e83f08519775be989c744288cee",
    "pow_hash": "82dd2ab608d3e440ed3ac12f23d77505c5d844e2775a35fb08afe4bafc764a57",
    "owner": "2",
    "meta": {
      "name": "Planetary Ordinal #59",
      "status": "Common",
      "rank": 56,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "iceland",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9i0",
    "txid": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9",
    "pow_hash": "85456a254a076f2c60b691bc1068d02c39fb3478f85bff5b7cf2dcc15531d093",
    "owner": "2",
    "meta": {
      "name": "Planetary Ordinal #2",
      "status": "Common",
      "rank": 47,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "future vibes",
          "status": "Legendary",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "15e3761e082e19602dd06606ef01098032b73b23cff6206ea0eb9d6a3549919ci0",
    "txid": "15e3761e082e19602dd06606ef01098032b73b23cff6206ea0eb9d6a3549919c",
    "pow_hash": "85c8bf9cb89b3a858f68bf12e2de08004de30b29439691d4d300511b10e3528c",
    "owner": "3",
    "meta": {
      "name": "Planetary Ordinal #6",
      "status": "Rare",
      "rank": 7,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sweet rain",
          "status": "Legendary",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "a5782446f5da9df6bd017a17bcae2294de92a7f1eb4929ffe3be403b35977472i0",
    "txid": "a5782446f5da9df6bd017a17bcae2294de92a7f1eb4929ffe3be403b35977472",
    "pow_hash": "873245cc6286b50696c4102cf6d359b20cdd63ef7dbd8257bc6aa43d6b6d740d",
    "owner": "616",
    "meta": {
      "name": "Planetary Ordinal #58",
      "status": "Uncommon",
      "rank": 23,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Caterpillar ovaries",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sesame",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "afc450753cdf9c0a7ca4809da3a3d4f3b526411356aa52491980cde898dbee7ei0",
    "txid": "afc450753cdf9c0a7ca4809da3a3d4f3b526411356aa52491980cde898dbee7e",
    "pow_hash": "8942842d900f0272161791c09230813b93a06ac1996a34e6785f286f3a0dac66",
    "owner": "432",
    "meta": {
      "name": "Planetary Ordinal #45",
      "status": "Common",
      "rank": 64,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "48b74ff588de917d4fe4ae2310a7c5c5ec566aece16425d9bc401ed5fd00800ai0",
    "txid": "48b74ff588de917d4fe4ae2310a7c5c5ec566aece16425d9bc401ed5fd00800a",
    "pow_hash": "8ad1f04900becc5b67c6ccc722b99888f5866b2d6f564af9d8e61b483fd3e885",
    "owner": "1",
    "meta": {
      "name": "Planetary Ordinal #47",
      "status": "Uncommon",
      "rank": 33,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Dark and ugly",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset cream",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "075cea939afed34d3deace15be73256ff92210b5c5de47b56ab0dacd80b99d0fi0",
    "txid": "075cea939afed34d3deace15be73256ff92210b5c5de47b56ab0dacd80b99d0f",
    "pow_hash": "8b475a441ea609461300f5c91408431c2cd9b3b9944301da284509f433cc88f4",
    "owner": "SellTheGreed#9519",
    "meta": {
      "name": "Planetary Ordinal #42",
      "status": "Common",
      "rank": 50,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sugar cream",
          "status": "Epic",
          "percent": "1.45%"
        }
      ]
    }
  },
  {
    "id": "0681ecfbde331aa230491cb7493e6048667e37fcd99c8c2c6410f6cc65fb2fbci0",
    "txid": "0681ecfbde331aa230491cb7493e6048667e37fcd99c8c2c6410f6cc65fb2fbc",
    "pow_hash": "8c830b74166a9b799d8b6c9bc66361acd7b0c6530be579f4aa8293df1e7bedff",
    "owner": "55248",
    "meta": {
      "name": "Planetary Ordinal #40",
      "status": "Common",
      "rank": 69,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "54e5fe8e50c43008aeead2f870a18b537a48e727a3cdad70e3c8583790c61060i0",
    "txid": "54e5fe8e50c43008aeead2f870a18b537a48e727a3cdad70e3c8583790c61060",
    "pow_hash": "9c93996ebf440e3597fc159cf9306f25b2d374cdd3694ca6c125e5b743b6b783",
    "owner": "328",
    "meta": {
      "name": "Planetary Ordinal #41",
      "status": "Common",
      "rank": 63,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset ice",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "fe4fb03ae38cc5f272d3049264b5e44f0b46bc248c543cb2afcb9a7f7f33e40ei0",
    "txid": "fe4fb03ae38cc5f272d3049264b5e44f0b46bc248c543cb2afcb9a7f7f33e40e",
    "pow_hash": "9dbce49d4ac22a30defc48b16efa3c5a6f0f8c4c495a4a8ad906a72f65bea0d4",
    "owner": "Lutron 68/egg#7613",
    "meta": {
      "name": "Planetary Ordinal #19",
      "status": "Common",
      "rank": 59,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "grasshopper",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "44d9a896014121a9694e2909f88e96cc45828eda17afd780111996b5d814db6di0",
    "txid": "44d9a896014121a9694e2909f88e96cc45828eda17afd780111996b5d814db6d",
    "pow_hash": "9e42ac80a64d9d6ef905e11aca817fc43cb9ad7ca6463581796381e9bc0003a7",
    "owner": "570",
    "meta": {
      "name": "Planetary Ordinal #4",
      "status": "Legendary",
      "rank": 2,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sesame creams",
          "status": "Legendary",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset ice",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "3ba80034ca86ced88ae003a16c7ecf14f0498ccb05dd2ea3ecfa2aa4a9ad4f22i0",
    "txid": "3ba80034ca86ced88ae003a16c7ecf14f0498ccb05dd2ea3ecfa2aa4a9ad4f22",
    "pow_hash": "a292bba56e3f79b584656d51262f93199186db4222eabb51e615be13936b8b03",
    "owner": "68",
    "meta": {
      "name": "Planetary Ordinal #29",
      "status": "Common",
      "rank": 60,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sunny day",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "b1f6a2f79b7fa450aacc18ab6ed4f811060484a7a19ec7e34036002de38a9670i0",
    "txid": "b1f6a2f79b7fa450aacc18ab6ed4f811060484a7a19ec7e34036002de38a9670",
    "pow_hash": "a3ef089aa8a1bd49716fcbfd871f49522e8d1be70482058a0a639965c94b6a0e",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #63",
      "status": "Uncommon",
      "rank": 24,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future kinds",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "grasshopper",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "d19a4a2a6a65047a5ad522a435cae75cf8e84c95643f5481daa144bd8a1a3537i0",
    "txid": "d19a4a2a6a65047a5ad522a435cae75cf8e84c95643f5481daa144bd8a1a3537",
    "pow_hash": "a5f150113b28ce0fb514636a35574b3d136108eb2eff2545eb4a25e16d7592eb",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #36",
      "status": "Common",
      "rank": 38,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunset breeze",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "icey rares",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "a17482cfe3741dc7be3cfe5d1a43708a24aea9ae1c6cb18a12b2776d21fadde6i0",
    "txid": "a17482cfe3741dc7be3cfe5d1a43708a24aea9ae1c6cb18a12b2776d21fadde6",
    "pow_hash": "aa1d469b7cd1822a1d4aec0da6ed10cebc23aeafc9f49e8c901b967d1a3973d5",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #60",
      "status": "Common",
      "rank": 57,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "happy times",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "5cc66dc49244cd7f1c0a052af34de9c703eee7d4e06303ee263966d1a7a5c162i0",
    "txid": "5cc66dc49244cd7f1c0a052af34de9c703eee7d4e06303ee263966d1a7a5c162",
    "pow_hash": "ab900697c5d4e0be23e914c146072160108730be9eccbb4081bc706cdf8dda9d",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #15",
      "status": "Common",
      "rank": 51,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "purple sky",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "98576e77436857cd9c8a3709298ff7defd7201cd3ab7efd4f2be69ab306847aai0",
    "txid": "98576e77436857cd9c8a3709298ff7defd7201cd3ab7efd4f2be69ab306847aa",
    "pow_hash": "ad72ea6feedc1a2ee55629afcb174d77005a72120b86988b425a86aa27596a15",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #43",
      "status": "Uncommon",
      "rank": 32,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Bloody ice",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sesame",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "cc987bebc1fc129b1d8fa1fcd5a66f6aeb626711f0c26c5249b726e905385a65i0",
    "txid": "cc987bebc1fc129b1d8fa1fcd5a66f6aeb626711f0c26c5249b726e905385a65",
    "pow_hash": "c57146034c2298f7f7936f6f97b0fcf2b8f63e4a87cb8538cdb41a0b5e5f9567",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #39",
      "status": "Epic",
      "rank": 5,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Cherry blossoms",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset ice",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "28def32699d2f9cdce64e088e98e1bcb15b6eaa6528a302eeb88587151e60798i0",
    "txid": "28def32699d2f9cdce64e088e98e1bcb15b6eaa6528a302eeb88587151e60798",
    "pow_hash": "c7fd17fe89b9e8be2317abd07cf0f900ecfdcbbe820e6e4eb05b7f7c50d4d04a",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #21",
      "status": "Common",
      "rank": 66,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "cbd62b57bc1b3ae8f6e0cfc402fbdbeb5ae4172f9200671f5f689f1af6d3332bi0",
    "txid": "cbd62b57bc1b3ae8f6e0cfc402fbdbeb5ae4172f9200671f5f689f1af6d3332b",
    "pow_hash": "d0b231a3cce24a3adb82d12627ec8b6869b4fd519b7c60f783e66476807ef28e",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #26",
      "status": "Uncommon",
      "rank": 30,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunset breeze",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset cream",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "af99e52d4fdeee94a95e0c1d0dcf964ea9544022c1e5192c235d19bc5fcf17efi0",
    "txid": "af99e52d4fdeee94a95e0c1d0dcf964ea9544022c1e5192c235d19bc5fcf17ef",
    "pow_hash": "d0c0471ef4a7c316ef025a69e76f1be7104e55a47e3e182f63ef043011258cf1",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #3",
      "status": "Common",
      "rank": 67,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "da597cf7823ca9c71a7c247ff142d5b72df328956e17035d544494f2e45cf0dfi0",
    "txid": "da597cf7823ca9c71a7c247ff142d5b72df328956e17035d544494f2e45cf0df",
    "pow_hash": "d90f52b8cf835f8a48587d76f6480d2ac1b921542adf03ecac333c87b70b4517",
    "owner": "Rocktoshi",
    "meta": {
      "name": "Planetary Ordinal #34",
      "status": "Common",
      "rank": 62,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "sunset cream",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "6bb69dc337faff2ee597dc814301b3087a4ca559b67f8eec9576680fd535aab7i0",
    "txid": "6bb69dc337faff2ee597dc814301b3087a4ca559b67f8eec9576680fd535aab7",
    "pow_hash": "ddb7811d4b002779288533a4d959f30f6365e608a54c2c1ef0f9189074b934df",
    "owner": "DEFSTALKR @106810",
    "meta": {
      "name": "Planetary Ordinal #27",
      "status": "Uncommon",
      "rank": 31,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future vibes",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "sesame",
          "status": "Common",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "4d49710b1c4d08cb237c9449339c1d876632a74d716e53becb2d3b60e97635f4i0",
    "txid": "4d49710b1c4d08cb237c9449339c1d876632a74d716e53becb2d3b60e97635f4",
    "pow_hash": "e1f8328b25fbf34c438ebe3836facc76d1a86090c6727b6a79678b2e9a797c7c",
    "owner": "365",
    "meta": {
      "name": "Planetary Ordinal #14",
      "status": "Common",
      "rank": 40,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunset breeze",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "small lake",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "c12c65cbd8a0a7ceaf73b98f028c282f9e3cab177598090cda077f35d44496ddi0",
    "txid": "c12c65cbd8a0a7ceaf73b98f028c282f9e3cab177598090cda077f35d44496dd",
    "pow_hash": "e2719f15450484e9993bd92f128030d897c0b3aa8ad89dafc37e656c1e365ef6",
    "owner": "40918",
    "meta": {
      "name": "Planetary Ordinal #44",
      "status": "Rare",
      "rank": 10,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Purple rain",
          "status": "Uncommon",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "sweet rain",
          "status": "Uncommon",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "929843a4451692e9823dbc54b58c92edfc2b8b49882287173164621b3db9b6cbi0",
    "txid": "929843a4451692e9823dbc54b58c92edfc2b8b49882287173164621b3db9b6cb",
    "pow_hash": "e8c2438c5cb544c151d75523ba6dec75d61a137ec5efb0febf4df2e12126d52a",
    "owner": "29124",
    "meta": {
      "name": "Planetary Ordinal #37",
      "status": "Common",
      "rank": 54,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "air weave",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "ce294cacda156d32c7ca5a2d4054a2cef9febea45da599ab337c76acc7fe0bf7i0",
    "txid": "ce294cacda156d32c7ca5a2d4054a2cef9febea45da599ab337c76acc7fe0bf7",
    "pow_hash": "e8f9d4f2a4aa25ec36499165b25647448f4b05ff08e427a50cd990f8844d9419",
    "owner": "goddess#2170 u/68928 satochan",
    "meta": {
      "name": "Planetary Ordinal #52",
      "status": "Common",
      "rank": 43,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunny deez",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "e16d60db451537538eec1dc0a4580b01870873df10bdb5d34860324b3e68a599i0",
    "txid": "e16d60db451537538eec1dc0a4580b01870873df10bdb5d34860324b3e68a599",
    "pow_hash": "e9c2793587ceef6eed0d97c0e19212f3f613831b16af0632aa86c36f67d2cefc",
    "owner": "Walkabout | kad.eth#0675",
    "meta": {
      "name": "Planetary Ordinal #62",
      "status": "Common",
      "rank": 45,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Future vibes",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "4bebed0c115768285e0db6d869d56c8da32d7d8343762400ba54638ceb00f6e8i0",
    "txid": "4bebed0c115768285e0db6d869d56c8da32d7d8343762400ba54638ceb00f6e8",
    "pow_hash": "ec73f2882e44a2887eb2567591465475e7843ac8cb67e8768b3f9028b3790024",
    "owner": "2090",
    "meta": {
      "name": "Planetary Ordinal #48",
      "status": "Common",
      "rank": 42,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sunny deez",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "90d8bfa82b0d7aef8c19d1e7ef3b9ff200d9df8eb3a3e70c073a65905bd95956i0",
    "txid": "90d8bfa82b0d7aef8c19d1e7ef3b9ff200d9df8eb3a3e70c073a65905bd95956",
    "pow_hash": "ecba45aa8f5d6149a128794252124cec5e37a8b403064e9281a4b28708619e4e",
    "owner": "10936 big riz",
    "meta": {
      "name": "Planetary Ordinal #57",
      "status": "Common",
      "rank": 55,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "fire",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "d07a8aa92acff133b437ddfb19fc745064dc0ff2425e66e0fb35e75e1ce0600bi0",
    "txid": "d07a8aa92acff133b437ddfb19fc745064dc0ff2425e66e0fb35e75e1ce0600b",
    "pow_hash": "ee6db26663a0be457aaab516eba865559e577b1392f5c96e5a7ca69f2bbe4f2c",
    "owner": "PistolPete#9884",
    "meta": {
      "name": "Planetary Ordinal #24",
      "status": "Common",
      "rank": 41,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Grey stays",
          "status": "Common",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "blinded sky",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  },
  {
    "id": "eb9eb494326d30d18104cbf4acf1f7c171cd232528e84de245d19f982b87c21ci0",
    "txid": "eb9eb494326d30d18104cbf4acf1f7c171cd232528e84de245d19f982b87c21c",
    "pow_hash": "f1b38ed25ab9cf0749db6192f7f9259375d043b45ef2de1e571c611d7a398720",
    "owner": "DEFSTALKR @106810",
    "meta": {
      "name": "Planetary Ordinal #16",
      "status": "Epic",
      "rank": 3,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Fire hot hot",
          "status": "Epic",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "grey skies",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "27b11b7de9c5e582e7777b88d48df862c47b86762a7553793491a73bffdeacbai0",
    "txid": "27b11b7de9c5e582e7777b88d48df862c47b86762a7553793491a73bffdeacba",
    "pow_hash": "f58a32aff0b362216302c5403d40d8572c2fede12193787b9ae3bc7a5cf7643b",
    "owner": "59592",
    "meta": {
      "name": "Planetary Ordinal #10",
      "status": "Uncommon",
      "rank": 28,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Bloody ice",
          "status": "Uncommon",
          "percent": "4.35%"
        },
        {
          "trait_type": "Holes",
          "value": "red snow",
          "status": "Uncommon",
          "percent": "4.35%"
        }
      ]
    }
  },
  {
    "id": "2dd775388b4d6f1c2a6a7201e587b4c1899372414a4d4c862c1b57ab3410dd50i0",
    "txid": "2dd775388b4d6f1c2a6a7201e587b4c1899372414a4d4c862c1b57ab3410dd50",
    "pow_hash": "f5d5fe6228732984fa23e96f576ddefba1c515e0cb0824c7e9af327ccf79e4a6",
    "owner": "worster#5534",
    "meta": {
      "name": "Planetary Ordinal #32",
      "status": "Common",
      "rank": 53,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Darkness",
          "status": "Common",
          "percent": "34.78%"
        },
        {
          "trait_type": "Holes",
          "value": "rose blossom",
          "status": "Rare",
          "percent": "2.90%"
        }
      ]
    }
  },
  {
    "id": "9c5dd0a41517189c0cbe73e5cd8f5dc5f800f8cf502eaaaf860b3b23cbeda1c9i0",
    "txid": "9c5dd0a41517189c0cbe73e5cd8f5dc5f800f8cf502eaaaf860b3b23cbeda1c9",
    "pow_hash": "f669544e1d340f0d5511951e057ec9f4cf75760142679f6fb8e1703a2f29c62d",
    "owner": "1198",
    "meta": {
      "name": "Planetary Ordinal #56",
      "status": "Rare",
      "rank": 12,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Princess drip",
          "status": "Rare",
          "percent": "1.45%"
        },
        {
          "trait_type": "Holes",
          "value": "air weaver",
          "status": "Common",
          "percent": "5.80%"
        }
      ]
    }
  },
  {
    "id": "74b3ee876e7e7429c9daca4939f1b5f77918f46cb65440cb858e86c2cb8bc6bfi0",
    "txid": "74b3ee876e7e7429c9daca4939f1b5f77918f46cb65440cb858e86c2cb8bc6bf",
    "pow_hash": "fb3deee8791df2e93cdfd5afb210ec05c5fd67210c14a71cb0d6eed712b3d792",
    "owner": "4",
    "meta": {
      "name": "Planetary Ordinal #28",
      "status": "Uncommon",
      "rank": 34,
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sun sun",
          "status": "Rare",
          "percent": "2.90%"
        },
        {
          "trait_type": "Holes",
          "value": "purple rain",
          "status": "Common",
          "percent": "7.25%"
        }
      ]
    }
  }
]
```
