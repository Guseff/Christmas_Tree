const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.resolve(__dirname, '.');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Christmas Tree',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts'],
  }
};
