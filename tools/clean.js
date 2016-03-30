import Promise from 'bluebird';
import del from 'del';
import makeDir from './lib/makeDir';

function clean() {
  return del(['build/*'])
    .then(makeDir('build/public'));
}

export default clean;