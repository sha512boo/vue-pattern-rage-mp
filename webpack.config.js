const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: `${__dirname}/src/index.js`,
    mode: 'development',
    output: { 
        path: __dirname,
        filename: '../client_packages/browser/js/vue-build.js',
    }, 
    resolve: { 
        alias: {
            'vue$': `${__dirname}/node_modules/vue/dist/vue.esm.js`
        },
    }, 
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,  
                use: {
                    loader: 'vue-loader',
                    options: {
                        presets: ['@babel/preset-env', 'babel-preset-vue'],
                    }
                },
  
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|gif|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}