var path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/Thermometer.js',
	output: {
		path: path.resolve('lib'),
		filename: 'Thermometer.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
}