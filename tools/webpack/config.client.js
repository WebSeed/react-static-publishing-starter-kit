import path from 'path';
import loaders from './loaders';

const config = {
  target: 'web',
  context: path.resolve(__dirname, '../../src'),
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, '../../build/public/assets'),
    filename: 'client.js'
  },
  module: {
    loaders: loaders
  },
  stats: {
    colors: true
  },
};

export default config;