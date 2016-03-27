import webpack from 'webpack';
import clientConfig from './webpack/config.client';
import serverConfig from './webpack/config.server';

function extractStats(config, stats) {
  return stats.toString(config.stats);
}

function build() {
  return new Promise((resolve, reject) => {
    webpack([clientConfig, serverConfig]).run((err, stats) => {
      if (err) {
        return reject(err);
      }
      return resolve(extractStats(clientConfig, stats));
    });
  });
}

export default build;