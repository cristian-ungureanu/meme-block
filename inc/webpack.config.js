const externals = {
	wp: 'wp',
	react: 'React',
	'react-dom': 'ReactDOM',
};

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

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
			{
				test: /\.s[ac]ss$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '../[name].css',
		} ),
	],
};
