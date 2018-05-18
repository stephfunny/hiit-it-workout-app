var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  module : {
    rules :

      [
      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: "style-loader"
          // },
          // {
          //   loader: "css-loader"
          // }
          // 'to-string-loader',
          'style-loader', 'css-loader', 'sass-loader'
       ]
      },
      {
        test : /\.jsx?/,
        include : [SRC_DIR],
        // include : [SRC_DIR, CAL],
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]

    // [
    //   {exclude: ['node_modules'], loader: 'babel-loader', test: /\.jsx?$/},
    //   {loader: 'style-loader!css-loader', test: /\.css$/},
    //   {loader: 'url-loader', test: /\.gif$/},
    //   {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    // ]


  }
};
