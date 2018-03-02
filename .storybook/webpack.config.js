const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules',
                './node_modules/grommet/node_modules',
              ],
            },
          },
        ],
      },
    ],
  },
};
