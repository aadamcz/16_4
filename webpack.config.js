const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const optimizeJSPlugin = require("optimize-js-plugin");


module.exports = {
	entry: [
			"./src/index.js"
	],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					presets: ['es2015', 'react']
				}
			},
			{
				test:/\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules:true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new optimizeJSPlugin({sourceMap:false}),
		new webpack.HotModuleReplacementPlugin()
	]	
};
