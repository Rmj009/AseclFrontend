const { defineConfig } = require('@vue/cli-service')
// const cors = require('cors');


module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  transpileDependencies: true,
  // devServer: {
  //   port: 8081, // Update the port to match your desired port
  //   headers: {
  //     'Access-Control-Allow-Origin': 'http://192.168.1.232', // Update the origin to 'http://192.168.1.232'
  //   },
  // },
})