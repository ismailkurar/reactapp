const path = require('path');
const webpack = require('webpack');

const HWP = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATTERN = /\.(jpe?g|png|gif|svg|ttf|otf|eot|woff(2)?)(\?v=\d+)?$/;
const SCSS_PATTERN = /\.scss$/;
const JS_PATTERN = /\.jsx?$/;

module.exports = (env) => {
  const local = env && env.local;

  return {
    mode: local ? 'development' : 'production',
    entry: ['App.jsx', 'app.scss'],
    output: {
      filename: `[name].[hash].js`,
      path: path.resolve('dist'),
    },
    module: {
      rules: [
        {
          test: JS_PATTERN,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: JS_PATTERN,
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
    plugins: [
      new HWP({
        template: path.join(__dirname, 'index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.HashedModuleIdsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
    ],
    // optimization
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            name: 'vendors',
            // sync + async chunks
            chunks: 'all',
            // import file path containing node_modules
            test: /node_modules/,
            priority: 20,
          },

          // common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve('src'),
        path.resolve('assets'),
      ],
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      port: '3000',
      proxy: {
        [`/local/mw/*`]: {
          target: '',
          changeOrigin: true,
          pathRewrite: { [`^/local/mw/`]: '' },
        },
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
    }
  };
};
