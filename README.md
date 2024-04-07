
# TODO: 
  
- Complete documentation


# Tests
Test the app on a iorp-standard mode, for each testing operation it creates the given files and folders by filesystem generateHierarchy.
```bash
    node test/test.js
    
```

# Usage

## Script wise
It can be called from a script at package.json. 
Developers can make their own scripts, and config files. 
```json
  "scripts": {
    "makedoc":"node @iorp-turbodoc/lib/scripts/turbodoc_default.js ./turbodoc.config.js",
   ...
  }
```
If the config file parameter is null it will seek the file './turbodoc.config.js'. If the developer doesnt want to use a config file, turbodoc shall be called funtion wise. 
```bash
    node src/scripts/turbodoc_default.js
```


## Function wise 
Just call the turbodoc js function providing appropiate parametry.
In this case the configuration can be passed as null, undefined, string or object. 
If null or undefined will assume that './turbodoc.config.js' exists,and it will use this path. 
If string that will be the custom options path. 
If object it will use the given object as options. 
```js
// Import turbodoc core and and config 
const turbodoc = require('../src/turbodoc.js');
  
 async()=>{ 
   let response = await turbodoc(OPTIONS);
  console.log(response);  
}();
```


#   Dev notes  
1. Build after edits.
Script postbuild will perform a npm link , see postbuild scripts at [package](./package.json).
  ```bash
   npm run build
   ```
2. Eventually link.
  ```bash
   npm link
   ```

3. Npm 
npm publish --access public

 
## Tests 

```bash
node test/test.js  

```




npm publish --force