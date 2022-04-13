const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/sync',
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, '.'),
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AutoCorrect',
      template: 'index.html',
    }),
  ],
  devServer: {
    contentBase: './',
  },
  mode: 'development',
};
