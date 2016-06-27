const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
            warnings: false
        }
    })
];

const config = {
    debug: ! isProduction,
    devtool: isProduction ? 'source-map' : 'eval',
    entry: './src/collection',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: ! isProduction ? 'collection.js' : 'collection.min.js',
        libraryTarget: 'umd',
        library: 'Collection'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};

if (isProduction) {
    config.plugins = plugins;
}


module.exports = validate(config);
