import extend from 'extend';
import path from 'path';
import loaders from './loaders';

import nodeExternals from 'webpack-node-externals';

const config = {

  target: 'node',

  context: path.resolve(__dirname, '../../src'),

  entry: './server.js',

  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals(),
  module: {
    loaders: loaders
  },
  stats: {
    colors: true
  }
};

export default config;