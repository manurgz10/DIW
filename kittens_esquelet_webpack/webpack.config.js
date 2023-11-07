const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/application.js', // entrada
  output: { // salida
    filename: './js/all.js',
    path: path.resolve(__dirname, 'dist'), //ruta
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //solo archivos scss
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',   // con el loader lo cargamos en nuestro js.
          'sass-loader'   // pasamos de sass a css
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/application.css', 
    }),
    new HtmlWebpackPlugin({
      name: 'Kittens',
      template: 'index.html'
    })
  ],
};
