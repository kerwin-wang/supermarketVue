const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    // less 配置
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 默认自动打开浏览器
  devServer: {
    contentBase: resolve('/public/'),
    inline: true,
    host: 'localhost',
    port: 5557,
    open: true
  }
}
