const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: '/gaia-explorer',
  assetPrefix: !debug ? '/gaia-explorer/' : '',
}
