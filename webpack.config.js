const webpack = require('webpack');
const path = require('path');
require('babel-polyfill');

const DEV = path.resolve(__dirname+'/app');
const OUTPUT = path.resolve(__dirname+'/public');

const config = {
	entry: [ 'babel-polyfill', DEV + '/App.js' ],
	output: {
		path: OUTPUT,
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: 'public',
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: [
						['import', { libraryName: 'antd', style: 'css' }],
						'transform-regenerator'
					]
				}
			},
			{
				test: /\.css?$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	}
};

module.exports = config;
