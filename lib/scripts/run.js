// scriptable 
const process = require('process');
const turbodevConfigPath = typeof process.argv[2] == 'string' ? process.argv[2] : null;
const turbodev = require('../turbodev.js');
const run = async () => {
  return await turbodev(turbodevConfigPath);
};
module.exports = run();