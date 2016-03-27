console.time('Took');

const start = new Date();
const taskName = process.argv[2];

console.log(`Running "${taskName}"`);

const task = require(`./${taskName}.js`).default;
task()
  .then(result => {
    console.log(result);
    console.timeEnd('Took');
  })
  .catch(err => {
    console.log('Error', err);
  });