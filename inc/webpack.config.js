const externals = {
	wp: 'wp',
	react: 'React',
	'react-dom': 'ReactDOM',
};

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

module.exports = {
	mode,
	entry: './src/meme-block.js',
	output: {
		path: __dirname,
		filename: './build/meme-block.js',
	},
	externals,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
