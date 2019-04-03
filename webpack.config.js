const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'application-bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json','.ts']// Add `.ts` as a resolvable extension.
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ['vue-style-loader','css-loader','less-loader']
    },
    {
      test: /\.css$/,
      use: ['vue-style-loader','css-loader'],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // hotReload: true // disables Hot Reload
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: false,
          collapseWhitespace: false
        }
      }
    ]},
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};