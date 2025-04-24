// packages/container/config/webpack.prod.js

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json'); // Go up one directory

// Define the domain variable using an environment variable
// Make sure 'process' has only one 'c'
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production', // Enables production optimizations
    output: {
        // Ensures unique filenames based on content for caching
        filename: '[name].[contenthash].js',
        // Important for Module Federation loading chunks later on AWS/S3/CDN
         // Add this publicPath property <<<--- ADD THIS LINE
         publicPath: '/container/latest/', // Tells webpack where assets are hosted
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', // Optional for host, but often included
            remotes: {
                // The key 'marketing' must match imports like import('marketing/...')
                // The value tells webpack where to find the remote's entry file in production
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
                // You will add other remotes (dashboard, auth) here later following the same pattern
                // dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`,
                // auth: `auth@${domain}/auth/remoteEntry.js`,
            },
            // Share dependencies listed in package.json
            shared: packageJson.dependencies,
        }),
        // HtmlWebpackPlugin is now moved to commonConfig
    ],
};

// Merge the common config with the production-specific config
module.exports = merge(commonConfig, prodConfig);
