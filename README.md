# fis-preprocessor-cssprefixer

a preprocessor for fis to autoprefixer css with [postcss/autoprefixer](https://github.com/postcss/autoprefixer)

1. install fis-preprocessor-cssprefixer 
	`npm install -g fis-preprocessor-cssprefixer`
2. modify fis-conf.js, invoke the cssprefixer plugin and set the browsers option of `postcss/autoprefixer` (https://github.com/ai/browserslist)
	```
	test.match('{*.css,*.scss}', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    });
    ```
3. fis release
`fis release`
