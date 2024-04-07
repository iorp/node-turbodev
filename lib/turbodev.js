const path = require("path");
const process = require("process");
const deepMerge = require('@iorp/node-aid/src/object/deepMerge.js');
const orchestrate = require('@iorp/node-aid/src/function/orchestrate.js');
const fileExists = require("@iorp/node-aid/src/filesystem/fileExists.js");
const findRootFolder = require('@iorp/node-aid/src/filesystem/findRootDirectory.js');
const initEnv = require("../src/methods/initEnv.js");
const callDevCmd = require("../src/methods/callDevCmd.js");
const turbodev = async (options = null) => {
  const turbodevConfigPath = path.join(findRootFolder(process.cwd()), "turbodev.config.js");
  if (!fileExists(turbodevConfigPath)) {
    //console.error("Not found ", turbodocConfigPath);
    return {
      error: 1,
      code: "TurbodevNoPath"
    };
  }

  // apply from file 
  options = require(turbodevConfigPath);

  // Call the specified command from the CommandCollection based on the command line argument.
  // Example usage: node yourScript.js prestart
  // This will execute the prestart logic and initialize the development environment.
  callDevCmd(options.CommandCollection, process.argv[2], 3);

  // operate here 
};
module.exports = turbodev;

// /**
//  * Environments object containing configuration for different environments.
//  * It includes keys like REACT_APP_API_URL, REACT_APP_TEST, and REACT_APP_HOMEPAGE.
//  */
// const Environments = {
//   // React
//   development: {
//     REACT_APP_API_URL: 'http://localhost/github/php-ioserver',
//     REACT_APP_VERBOSE:true,
//     REACT_APP_HOMEPAGE: '',
//     BUILD_PATH: ''
//   },
//   // Build
//   production: {
//     REACT_APP_API_URL: 'http://localhost/github/php-ioserver',
//     REACT_APP_VERBOSE:true, 
//     REACT_APP_HOMEPAGE: 'http://localhost/github/react-ioclient/build/',
//     BUILD_PATH:'./build'
//   },
//   // Dist 
//   distribution: {
//     REACT_APP_API_URL: 'https://truegrains.vn/iorp/web/php-ioserver', 
//     REACT_APP_HOMEPAGE: 'https://iorp.github.io/web/', // this is where dist goes, rename dist as web and put in repo  
//     BUILD_PATH:'./dist'
//   }
// }

// /**
//  * CommandCollection object containing development command logic.
//  */
// const CommandCollection = {
//   after: class {
//     /**
//      * Constructor for the after command.
//      * @param {Array} argv - The command line arguments.
//      * @param {string} argv.0 - The destination environmnent folder name of the files to copy
//      * call as init production|distribution
//      */
//     constructor(argv) { 
//       console.log(argv)

//   try{
//   fs.copyFileSync('.htaccess', './'+argv[0]+'/.htaccess');
//   console.log('.htaccess copied to ./'+argv[0]);
//   }catch(error){
//       console.error( {error:true,code:"AFTER_COPY_EXCEPTION",exception:error});
//       }
//     }
//     },
//   init: class {
//     /**
//      * Constructor for the prestart command.
//      * @param {Array} argv - The command line arguments.
//      * @param {string} argv.0 - The environmnet to initialize

//      * call as init development|production|distribution
//      */
//     constructor(argv) { 
//       // Initialize the development environment using initEnv from @iorp/turbodev.development.devjs
//       // Note: Before using the 'init' command, ensure you have a dev.js file in the root of your project. And
//       // in this case also a package.json. 
//       // The dev.js file should include the necessary configurations and environment variables.
//       // You can customize the Environments object based on your project requirements.
//       // The second parameter tells it to pass
//      let r= initEnv(argv[0],Environments, { 'homepage': 'REACT_APP_HOMEPAGE' },(envName)=>{

//     });
//      console.log(r)
//     }
//   }

// }