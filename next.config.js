const webpack = require('webpack')
require('dotenv').config()

const withAssetRelocator = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options
      
      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false
        })

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: '@zeit/webpack-asset-relocator-loader',
            options: {
              outputAssetBase: 'assets',
              existingAssetNames: [],
              wrapperCompatability: true,
              escapeNonAnalyzableRequires: true
            }
          }
        })
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

module.exports = withAssetRelocator({
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    return config
  },
  target: 'serverless'
})
