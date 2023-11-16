# Ordinals Collections Standards

#### A place for creators &amp; builders to organize ordinal collections

## Getting Started

**_Artists_**

Collection creators can format their collection data using the `inscriptions.json` and `meta.json` format below to be listed on all platforms using the standard

**_Steps_**

1. Create your `inscriptions.json` and `meta.json` files in the format provided below
2. Add to the registry by creating a pull request including new collections that follow the standard
3. After successfully opening a pull request, your files will be tested for compatibility with the main repo. If the test fails, click on "Details" to look into the test log for error messages. You might get a hint on what needs to be corrected within your pull request. 

**_Tips_**
- Check out [this](https://ordinals-metadata-composer.vercel.app/) file formatting tool
- Formatting can also easily be done in Visual Studio Code Editor. Open your .json with Visual Studio Code and press Shift+Alt+F.

## File Structure

```
 .
 ├── ...
 └── collections
     └── [collection-name]
          ├── inscriptions.json
          └── meta.json
```

## Collection Metadata `meta.json`

```
{
  "name": "",                    # inscription name
  "inscription_icon": "",        # (optional) collection cover inscription id
  "icon": "",                    # (optional) collection cover icon url
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

Artists can assign unique traits to ordinals with `attributes`

```
[
  {
    "id": "",
    "meta": {
      "name": ""
      "attributes": [
        {
          "trait_type": "",        # trait category
          "value": "",             # trait value
        },
        ...
      ]
    }
  },
  ...
]
```

## Here is an example of a completed collection inscription

Your meta.json file will look like this:

```
{
  "name": "Planetary Ordinals",
  "inscription_icon": "98da33abe2045ec1421fcf1bc376dea5beb17ded15aa70ca5da490f50d95a6d9i0",
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
      "attributes": [
        {
          "trait_type": "Background",
          "value": "Sun sun",
        },
        {
          "trait_type": "Holes",
          "value": "rose blossom",
        }
      ]
    }
  }
]
```

## Error hunting 

After succesfully opening a pull request, your metadata files will be auto-tested for compatibility with the main repo. 

✅ Green check mark means there were no problems found and your files should be ready to be merged into the repo by the maintainer. 

❌ Red mark means there were conflicts found in your file. Click on "Details" to see the autocheck log. In the log, the end of the "Run tests" section will give you a hint on what went wrong. 

### Common mistakes

#### Wrong "supply" in the meta.json. 
If the supply is lower than the amount of inscriptions in the inscriptions.json, the website may not list your whole collection.

#### Too many commas. 
On of the most common mistakes in jsons is having commas between a closing " and a closing } or ].
wrong:
```javascript ..."example",} ``` 
correct: 
```javascript ..."example"} ```

#### Wrong directory. 
Your meta.json and inscriptions.json should go into /ordinals-collections/collections/your-collection-name/... 
Ideally, "your-collection-name" and "slug" within the meta.json are identical. To correct the directory in your open pull request, simply go to "Edit" your jsons within it, and then look at the directory above the edit section. If you backspace on the filename you can edit the /directory entry too!

#### Outdated fork used for creating a pull request. 
When UPDATING your collection metadata, please make sure you have updated/synchronized the repo fork your are creating the pull request for. 

#### Different directory or "slug" in metadata update 
Please use THE SAME directory (and also "slug" in meta.json) as you used for your collection before. Otherwise your pull request will be conflicting with the main repo, and may require the maintainer to manually delete your old metadata before merging your new pull request. 

