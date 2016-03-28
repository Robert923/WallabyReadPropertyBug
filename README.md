### Issue description or question

Everything works fine when Wallaby is first started and all the unit tests pass.

However, if you make **_any_** change to domainLogicTests.ts
(say, press space on an empty line) then the unit test will instantly fail
with the following error:

	Cannot read property '1' of undefined
		at test/mockInterfaceImpl.ts:14
		at lib/domainLogic.ts:29
		at test/domainLogicTests.ts:38

The unit tests work just fine in Mocha from the command line, even with 'mocha --watch'.


### Wallaby.js configuration file

    // See: http://wallabyjs.com/docs/config/overview.html
    // See: http://wallabyjs.com/docs/intro/config.html
    // and  http://wallabyjs.com/docs/config/files.html
    module.exports = function (wallaby) {
        return {
            'files': [
                'lib/**/*.ts'
            ],

            'tests': [
                'test/*.ts',
                'test/**/*.ts'
            ],

            'testFramework': 'mocha',

            // http://wallabyjs.com/docs/integration/typescript.html
            compilers: {
                '**/*.ts': wallaby.compilers.typeScript({
                    module: 5,  // 1 for CommonJs, 5 for ES6
                    target: 2,  // ES6
                    typescript: require('typescript')   // use Node typescript version
                })
            },

            // Allow TypeScript to ES6, and then Babel to ES5:
            // From https://github.com/wallabyjs/public/issues/355#issuecomment-159764077
            preprocessors: {
                '**/*.js':
                    (file) =>
                        require('babel-core').transform(file.content, { sourceMap: true, presets: ['es2015'] } )
            },

            env: {
                type : 'node',
                runner: 'node'
            },
            
            // I added this after reading through your troubleshooting guide - made no difference
            workers: {
                initial: 1,
                regular: 1,
                recycle: true
            }
        };
    };


### Code editor or IDE name and version
WebStorm v11  
  or  
Visual Studio Code v0.10.11


### OS name and version
Windows 10 - Version 1511 - OS Build 10586.164
(two different computers - but both with similar configuration)