// const path = require('path'); 
// const process = require('process'); 
// const extractDoc = require('@iorp/node-aid/src/plugin/turbodoc/plugins/extractDoc/extractDoc');
// const buildTemplate = require('@iorp/node-aid/src/plugin/turbodoc/plugins/buildTemplate/buildTemplate');
// const parseJSJSON = require('@iorp/node-aid/src/plugin/turbodoc/parsers/JsDocParser/parseJSJSON');
// const parseFile = require('@iorp/node-aid/src/plugin/turbodoc/plugins/extractDoc/operations/parseFile');
// const makeMap = require('@iorp/node-aid/src/plugin/turbodoc/plugins/extractDoc/operations/makeMap');
// const LiteResponsive = require('@iorp/node-aid/src/plugin/turbodoc/templates/LiteResponsive');
// const formatHTML = require("@iorp/node-aid/src/plugin/turbodoc/formatters/formatHTML"); 
 

// const targetPath = path.join('./src');
// const docPath = path.join('./', 'output', 'doc');
// const outputPath = path.join('./', 'output');

// module.exports={
 
//  plugins:[
//   // extract map
//   [extractDoc,{
//     targetPath,
//     outputPath,
//     docPath: docPath,
//     operations:[ 
//       [makeMap,{
//         mapKeys:['name','location','uri','route'],
//         model:parseJSJSON,
//         modelOptions:{   
//           // maxDepth:0, // max depth  
//           //filter: (node, offset, lines, line, self) => {    return true; }, // filter: if it returns true ,the node will be stored, if not ,the collected object will not be stored.
  
//         } 
//       }]
//     ]
//   }],
//   // extract content
//   [extractDoc,{
//     targetPath,
//     outputPath,
//     docPath: docPath,
//     // fileFilter: (filePath) => true,
//     // dirFilter: (dirPath) => true,

//     // Operations are executed per file 
//       operations:[  
//         [parseFile,{ 
//           maxDepth:1,
//           makeLocal:true,
//           makeGlobal:true,
//           globalMode:'rom', 
//           makeMap:false,
//          // mapKeys:['name','filePath','route','type'],
//            model:parseJSJSON,
//           modelOptions:{   
//          // maxDepth:0, // max depth 
//           // only functions and classes 
//           filter: (node, offset, lines, line, self) => {    
//           //  return  node.level==0 && (node.datatype =='function' || node.datatype =='class') ;    }, // filter: if it returns true ,the node will be stored, if not ,the collected object will not be stored.
//             // return  node.level==0 ;   // another way of maxDepth
//           return true; }, // filter: if it returns true ,the node will be stored, if not ,the collected object will not be stored.

//         },
//         renders:[
//           [formatHTML,{
//             extension:'html',
//             suffix:'.raw'
//           }],
//           [formatHTML,{
//             extension:'html',
//             template:LiteResponsive
//           }]
//         ]
        
//       }],  
         
//       ],
//     onComplete:(data)=>{ console.log('Completed extractDoc.');  }
//   }],
//  // build from template 
//  [buildTemplate,{ 
//   outputPath:outputPath,
//   template:LiteResponsive
// }],
//   // [(options)=>{console.log(options);},{message:'hello'}]
//   // [composeDoc,{ 
//   //   template:ResponsiveLite,
//   //   onComplete:(data)=>{ console.log('Completed composeDoc.');  },

//   //   // Operations are executed per file 
//   //    operations:[    
//   //      [composeSinglePage,{
//   //       docPath:docPath,
//   //       docPath:distPath,
//   //       template:ResponsiveLite,
//   //       maxDepth:null,
//   //       formatter:formatHTML
//   //      }] ]
//   // }],
//  ]
 
// }