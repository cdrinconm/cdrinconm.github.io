// vue-loader is a loader for webpack that allows you to author Vue components in 
// a format called Single-File Components (SFCs)
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js' // Translate App.vue file to bundle.js
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // Transpiling JavaScript files using Babel and webpack.
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new  VueLoaderPlugin()
    ]
};