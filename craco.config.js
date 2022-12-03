const path = require('path')
const Cracolessplugin = require('craco-less')
const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [{ plugin: Cracolessplugin }],

  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  }
}
