# Gaia Explorer
[Project live - hosted on Github Pages](https://pierre-aurele-martin.github.io/gaia-explorer/)
## Thanks to:
[Material-ui](https://github.com/mui-org/material-ui)
[Spacekit](https://github.com/typpo/spacekit) (check it out!)
[Algolia React InstantSearch](https://github.com/algolia/react-instantsearch)

## Data
The data used in the demo are a ridiculously tiny part of [Gaia Early Data Release 3](https://www.cosmos.esa.int/web/gaia/early-data-release-3). Science with 1 billion objects in three dimensions. I only represented 7000+ objects. 

The representation of space objects are mostly inaccurate as I'm no physicist. If you'd like to help me get it straight, [just reach out](https://twitter.com/PierreAurele)

You can find the sample I used in the `/public/data` folder.

## Spacekit
I'm using [Spacekit](https://github.com/typpo/spacekit) for the space rendering. I had to tweak it so all orbits are ELLIPTICAL as I was not able to render the other types. Same for the data with `has_photocenter_motion === NULL`, I had to filter them because they were all without any orbit. Might be the point of this key, might be not. Again, any help to understand is welcome [Twitter](https://twitter.com/PierreAurele)  or **Pull Request** :)

You can find the data mapping between Gaia data and Spacekit in `/hooks/useSpacekit.ts`

## Run
You'll need to configure those keys in a .env file: 

 - NEXT_PUBLIC_ALGOLIA_APP_ID=
 - NEXT_PUBLIC_ALGOLIA_INDEX_NAME=
 - NEXT_PUBLIC_ALGOLIA_PUBLIC_KEY=
 - ALGOLIA_PRIVATE_KEY=

To deploy on Github Pages:

    npm run deploy

To buid locally: 

    npm run dev

I'm using [Nextjs](https://github.com/vercel/next.js/), check out the repo for more options, it offer a lot of deployment options :)

To parse local data and indexing to Algolia - it's very basic and was meant for my own use:
`node parser.js`