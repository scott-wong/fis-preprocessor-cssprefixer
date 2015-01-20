# fis-preprocessor-cssprefixer

a preprocessor for fis to autoprefixer css with [postcss/autoprefixer](https://github.com/postcss/autoprefixer)

1. install fis-preprocessor-cssprefixer 
	`npm install -g fis-preprocessor-cssprefixer`
2. modify fis-conf.js  
	`fis.config.set("modules.preprocessor.css", "cssprefixer");`
3. set the browsers option of `postcss/autoprefixer`  

	```
	fis.config.merge({
	    settings : {
	        preprocessor : {
	          cssprefixer : {
	              // detail config (https://github.com/postcss/autoprefixer#browsers)
	              "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
	              "cascade": true
	            }
	        }
	    }
	});
	```
4. fis release
`fis release`
