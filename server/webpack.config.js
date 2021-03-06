 var config = {
   entry: './React/app.js',
   output: {
      path:'../client/public/js',
      filename: 'index.js',
   },
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
}

module.exports = config;