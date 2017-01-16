var webpack = require('webpack')
var path = require( 'path' );

module.exports = {
  entry: './index.js',

  output: {
    path: '/app',
    filename: "bundle.js"
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  resolve: {
    modulesDirectories: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
}
