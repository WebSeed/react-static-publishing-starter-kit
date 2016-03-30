import Promise from 'bluebird';
const ncp = Promise.promisify(require('ncp'));

function copy() {
  return ncp('src/public', 'build/public');
}

export default copy;