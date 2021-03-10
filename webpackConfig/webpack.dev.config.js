const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={ 
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    output:{
        path: path.resolve(__dirname, '../build')
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/index.html')
        })
    ]
}