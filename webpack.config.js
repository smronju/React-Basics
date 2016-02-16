module.exports = {
  entry: './src/',
  output: {
    filename: 'bundle.js',
    path: './built'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel-loader' ]},
      { test: /\.css/, loaders: [ 'style', 'css', 'postcss' ]}
    ]
  }
};
