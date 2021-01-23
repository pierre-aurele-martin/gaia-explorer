const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? '/gaia-explorer/' : '',
  assetPrefix: !debug ? '/gaia-explorer/' : '',
}
