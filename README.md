# Ordinals Collections Standards

#### A place for creators &amp; builders to organize ordinal collections!

## Getting Started

**_Artists_**

Collection creators can format their collection data using the `inscriptions.json` and `meta.json` format below to be listed on all platforms using the standard!

**_Steps_**

1. Create your `inscriptions.json` and `meta.json` files in the format provided below
    - Check out [this](https://ordinals-metadata-composer.vercel.app/) file formatting tool!
2. Add to the registry by creating a pull request including new collections that follow the standard
3. Websites can use the registry to include the ordinal collections provided on their websites!

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

Artists can assign unqiue traits to ordinals with `attributes`

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
