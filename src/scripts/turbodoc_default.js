// scriptable 
const process = require('process');
const turbodocConfigPath = typeof process.argv[2] =='string'?process.argv[2] : null;
const turbodoc = require('../turbodoc.js');
 
console.log(turbodocConfigPath,123)

const  turbodoc_default=async()=>{


    r = await turbodoc(turbodocConfigPath);
  console.log(r);
  return r;


} 
module.exports =  turbodoc_default();