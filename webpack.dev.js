var webpack = require('webpack');
var path  =require('path');
var host = 'localhost';
var port = '3000';
module.exports = {
  context: __dirname,
  devtool: '#source-map',
  entry:[
    'webpack-dev-server/client?http://' + host + ':' + port,
    './src/entry'
  ],
  output: {
    path: path.resolve(__dirname,'public'),
    publicPath: '/assets/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js|x$/, exclude: /(node_modules|bower_components)/, loader: 'babel?presets[]=es2015'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
