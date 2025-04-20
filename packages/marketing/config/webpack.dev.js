// Import the merge function from webpack-merge
const { merge } = require('webpack-merge');
// Import the HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Import the ModuleFederationPlugin <<<--- ADD THIS
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// Import the common webpack configuration
const commonConfig = require('./webpack.common.js');
// Import package.json to read dependencies <<<--- ADD THIS (Good practice for 'shared' later)
const packageJson = require('../package.json');

// Define the development-specific configuration object
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        // Add ModuleFederationPlugin configuration <<<--- ADD THIS BLOCK
        new ModuleFederationPlugin({
            name: 'marketing', // Name for the remote module
            filename: 'remoteEntry.js', // Standard filename for the manifest
            exposes: {
                // Expose the bootstrap file under the alias './MarketingApp'
                './MarketingApp': './src/bootstrap',
            },
           // Add the shared configuration <<<--- ADD THIS
           shared: packageJson.dependencies,
    }),
        // Keep HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

// Merge the common configuration with the development configuration
module.exports = merge(commonConfig, devConfig);
