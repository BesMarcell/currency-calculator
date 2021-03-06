const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
  source: resolve(__dirname, '..', 'src'),
  modules: resolve(__dirname, '..', 'node_modules'),
  build: resolve(__dirname, '..', 'build'),
};

const config = {
  entry: {
    bundle: './src/index',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      dir.modules,
      dir.source,
    ],
  },
};

const rules = [{
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: dir.modules,
  use: 'eslint-loader',
}, {
  test: /\.jsx?$/,
  exclude: dir.modules,
  use: 'babel-loader',
}, {
  test: /\.(jpe?g|png|gif)$/,
  loader: 'file-loader',
  options: {
    name: 'icons/[name].[hash:8].[ext]',
  },
}, {
  test: /\.(ttf|otf)(\?[a-z0-9=&.]+)?$/,
  loader: 'url-loader',
  options: {
    limit: 1024,
    mimetype: 'application/octet-stream',
    name: 'fonts/[name].[hash:8].[ext]',
  },
}];

const plugins = [
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.ejs',
    title: 'CurrencyCalc',
  }),
];

module.exports = {
  dir,
  config,
  rules,
  plugins,
};
