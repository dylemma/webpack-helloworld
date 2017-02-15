var path = require('path')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		index: './app/index.js',
		page1: './app/page1.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js',
			chunks: ['index', 'page1']
		})
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}