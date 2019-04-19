const webpack = require('webpack')

require('dotenv').config()

module.exports = {
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    return config
  },
  exportPathMap: function () {
    return {
        "/": { page: "/" },
        '/product/1': { page: '/product', query: { id: "1" } },
        '/product/2': { page: '/product', query: { id: "2" } },
        '/product/3': { page: '/product', query: { id: "3" } },
        '/product/4': { page: '/product', query: { id: "4" } },
        '/product/5': { page: '/product', query: { id: "5" } },
        '/product/6': { page: '/product', query: { id: "6" } },
        '/product/7': { page: '/product', query: { id: "7" } },
        '/product/8': { page: '/product', query: { id: "8" } },
        '/product/9': { page: '/product', query: { id: "9" } },
        '/product/10': { page: '/product', query: { id: "10" } },
        '/product/11': { page: '/product', query: { id: "11" } },
        '/product/12': { page: '/product', query: { id: "12" } },
        '/product/13': { page: '/product', query: { id: "13" } },
        '/product/14': { page: '/product', query: { id: "14" } },
        '/product/15': { page: '/product', query: { id: "15" } }
    }
  },
  target: 'serverless'
}
