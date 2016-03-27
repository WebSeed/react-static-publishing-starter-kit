const loaders = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  },
  {
    test: /\.json?$/,
    loader: 'json'
  }
];

export default loaders;