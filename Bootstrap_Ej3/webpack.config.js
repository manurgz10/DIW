const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/application.js', // entrada
  output: { // salida
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist'), //ruta
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3002,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //ayuda a instalar los estilos en el dom de la página.
          'css-loader',    // Convierte los archivos CSS en módulos JavaScript
          'sass-loader',   // Compila archivos SASS a CSS
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      name: 'Bootstrap Web',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
};