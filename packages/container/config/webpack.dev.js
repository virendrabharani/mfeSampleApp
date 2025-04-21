const { merge } = require('webpack-merge');
// HtmlWebpackPlugin require is removed and moved to common
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// Import the ModuleFederationPlugin <<<--- ADD THIS
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');
// Import package.json to read dependencies <<<--- ADD THIS
const packageJson = require('../package.json'); // Path is relative to this config file

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/', // Ensure dev server publicPath is set
      },
    devServer: {
        port: 8080, // Container runs on 8080
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        // Add ModuleFederationPlugin configuration <<<--- ADD THIS BLOCK
        new ModuleFederationPlugin({
            name: 'container', // Optional name for the host
            remotes: {
                // Define the 'marketing' remote
                // Key 'marketing' is used in imports (e.g., 'marketing/MarketingApp')
                // Value specifies where to find it: marketing@<url>/<filename>
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
         
       // Add the shared configuration <<<--- ADD THIS (Identical to marketing's video 45)
       shared: packageJson.dependencies,
    }),
        // Keep HtmlWebpackPlugin
        // HtmlWebpackPlugin instance is removed
        // new HtmlWebpackPlugin({
        //     template: './public/index.html'
        // })
    ]
};

module.exports = merge(commonConfig, devConfig);
