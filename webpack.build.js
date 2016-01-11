module.exports = {
  context: __dirname,
  entry:[
    './src/entry'
  ],
  output: {
    path: 'public/assets/',
    publicPath: '/',
    filename: 'main.js'
  }

}
