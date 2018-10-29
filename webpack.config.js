const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill', './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.html$/,
        use: ['html-loader'],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader'],
      }, {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'The Minimal React Webpack Babel Setup',
      filename: 'dist/index.html',
      minify: true,
      hash: true,
      showErrors: true,
    }),
  ],
};

// module > rules > need 'style-loader', 'css-loader', 'file-loader', 'html-loader'
