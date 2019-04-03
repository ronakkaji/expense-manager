const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "login"];
const htmlWebpackPlugin =[];
pages.forEach(function (item) {
	htmlWebpackPlugin.push(new HtmlWebpackPlugin({
		template: "./src/client/" + item + ".html",
		filename: item + ".html"
	}));
});

module.exports = {
	mode: "development",
	entry: "./src/client/index.js",
	output: {
		filename: "app.[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css"
		})
	].concat(htmlWebpackPlugin)
};