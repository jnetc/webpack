const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';
const BroccoliCleanCss = require('broccoli-clean-css');

// Настройка модуля
module.exports = {

  // Точки входа
  entry: {
    app: [
      './src/index.js',
      './src/component/app.less'
    ]
  },

  // Путь для собранных файлов
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: './js/app.js'
  },

  // Модули
  module: {
    rules: [{
      test: /\.(less|css)$/,
      use: [
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {loader: 'postcss-loader',  options: {
          ident: 'postcss',
          plugins: (loader) => [
            // require('postcss-import')({ root: loader.resourcePath }),
            // require('postcss-cssnext')(),
            require('autoprefixer')(),
            require('cssnano')()
          ]
        }},
        {loader: 'less-loader', options: {
          paths: [
            path.resolve(__dirname, 'node_modules')
          ]}
        }
      ]
    }]
  },

  // Подключаем дополнения
  plugins: [

    // Переносит html в проэкт
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // Извлекаем из LESS, CSS 
    new MiniCssExtractPlugin({
      filename: isHot ? 'css/[name].css' : 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],

  // Настройка веб сервера
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    noInfo: true,
    compress: true,
    hot: true,
    port: 3000
  }
};