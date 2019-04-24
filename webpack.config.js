const path = require('path');
const webpack = require('webpack');

const HWP = require('html-webpack-plugin');

module.exports = {
      entry: path.join(__dirname, 'src/App.jsx'),
  output: {
    filename: `[name].[hash].js`,
    path: path.resolve('dist'),
  },
     module:{
            rules:[{
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
       }]
      },
     plugins:[
           new HWP(
              {
                template: path.join(__dirname,'src/index.html'),
                filename: 'index.html',
                inject: 'body',
              }
         ),
        new webpack.HashedModuleIdsPlugin()
    ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve('src'),
    ],
    extensions: ['.js', '.jsx'],
  }
  }