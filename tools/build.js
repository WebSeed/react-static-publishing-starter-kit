import clean from './clean';
import copy from './copy';
import bundle from './bundle';

function build() {

  return clean()
    .then(copy)
    .then(bundle);
}

export default build;