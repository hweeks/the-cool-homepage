const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: './src/index.tsx',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    path: `${__dirname}/server/build`,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          `${__dirname}/src`,
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.t(s|sx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|pdf)/i,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: `${__dirname}/static`,
    publicPath: '/',
    filename: '[name].bundle.js',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hweeks - all kinds of js',
      template: './server/index-template.html',
      favicon: './src/static/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
      },
    },
  },
};
