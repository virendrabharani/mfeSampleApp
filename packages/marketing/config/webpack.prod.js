// packages/marketing/config/webpack.prod.js

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json'); // Go up one directory
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production', // Enables production optimizations
    output: {
        // Ensures unique filenames based on content for caching
        filename: '[name].[contenthash].js',
        // Important for Module Federation loading chunks later on AWS/S3/CDN
        // Assumes marketing assets are served from /marketing/latest/ on the domain
        publicPath: '/marketing/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing', // Name used in the container's remotes config
            filename: 'remoteEntry.js', // The manifest file name
            exposes: {
                // Alias used in container: Path relative to marketing package root
                './MarketingApp': './src/bootstrap',
            },
            // Share dependencies listed in package.json
            shared: packageJson.dependencies,
        }),
        // Note: HtmlWebpackPlugin is NOT needed here, as marketing doesn't run standalone in prod
    ],
};

// Merge the common config with the production-specific config
module.exports = merge(commonConfig, prodConfig);

