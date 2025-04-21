// packages/container/config/webpack.common.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // <--- ADD THIS LINE

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            // Add loaders for CSS, images, etc. here if needed
        ],
    },
    plugins: [ // <--- ADD THIS PLUGINS ARRAY (OR ADD TO EXISTING ONE)
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path relative to container root
        }),
    ], // <--- ADD THIS COMMA IF NEEDED
};
