module.exports = {
    devServer: {
      watchOptions: {
          host: 'localhost',
          poll: true
      },
      disableHostCheck: true,
      historyApiFallback: true,
    }
}

  /*
  module.exports = {
  devServer: {
    public: 'subdomain.domain.ext:port'
  }
};
*/