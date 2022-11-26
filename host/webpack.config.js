const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require("./package.json").dependencies;


module.exports = {
    entry: "./src/index.js",
    devServer: {
        port: 3002,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                loader: "url-loader",
            },
        ],
    },
    resolve: {
        alias: {
            '@host': path.resolve(__dirname, 'src'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                "remote-modules": "remoteModules@http://localhost:3001/remoteEntry.js"
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                  },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                "react-redux": {
                    singleton: true,
                    requiredVersion: deps["react-redux"],
                },
                "axios": {
                    singleton: true,
                    requiredVersion: deps["axios"],
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
