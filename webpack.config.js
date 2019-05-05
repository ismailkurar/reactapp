const path = require('path');
const webpack = require('webpack');

const HWP = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATTERN = /\.(jpe?g|png|gif|svg|ttf|otf|eot|woff(2)?)(\?v=\d+)?$/;
const SCSS_PATTERN = /\.scss$/;

module.exports = () => {

  const config = {
    entry: ['App.jsx', 'app.scss'],
    output: {
      filename: `[name].[hash].js`,
      path: path.resolve('dist'),
    },
    module:{
      rules:[
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'eslint-loader'
        },
        {
          test: SCSS_PATTERN,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
              },
            },
            'sass-loader',
          ]
        },
        {
          test: ASSET_PATTERN,
          exclude: path.resolve('assets/icons'),
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            context: 'assets',
          },
        }]
    },
    plugins:[
      new HWP({
        template: path.join(__dirname,'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
      }),
    ],
    resolve: {
      modules: [
        'node_modules',
        path.resolve('src'),
        path.resolve('assets'),
      ],
      extensions: ['.js', '.jsx'],
    }
  };

  return config;
};
