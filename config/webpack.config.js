const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
/**
 * `..` Since this config file is in the config folder so we need
 * to resolve path in the top level folder.
 */
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    mode: 'development',
    entry: {
        // Since we need to load vue in the entry page.
        vue: 'vue',
        // This is where the `main-content` component is
        template: resolve('scripts/template.js'),
        googlesheetDB: resolve('scripts/googlesheetdb.js'),
        basic: resolve('scripts/basic.js'),
    },
    output: {
        filename: '[name].js',
        // Folder where the output of webpack's result go.
        path: resolve('public/bundle'),
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',

                ]
            },
            {
                test: /\.scss$/,
                use: [
                    //chaining the loaders is the key!
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]

};