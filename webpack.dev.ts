const { merge:devMerge } = require('webpack-merge');
const devCommon = require('./webpack.common.ts');

module.exports = devMerge(devCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});