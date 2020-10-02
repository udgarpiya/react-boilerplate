const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings happens at last
          'style-loader',
          // Translates CSS into CommonJS happens second
          'css-loader',
          // Compiles Sass to CSS happens first
          'sass-loader',
        ],
      },
    ],
  },
})
