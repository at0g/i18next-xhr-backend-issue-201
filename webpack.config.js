module.exports = {

	context: __dirname,

	entry: './src/main.js',

	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				ignore: /node_modules/
			}
		]
	}

};
