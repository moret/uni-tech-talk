module.exports = {
  entry: './src/client.js',
  output: {
    path: __dirname,
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};
