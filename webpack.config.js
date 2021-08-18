const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/sync',
      },
    ],
  },
  experiments: {
    syncWebAssembly: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Development',
  //   }),
  // ],
  devServer: {
    contentBase: './',
  },
  mode: 'development',
};
