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
        
        workers: {
            initial: 1,
            regular: 1,
            recycle: true
        }
    };
};
