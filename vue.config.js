module.exports = {
  devServer: {
    port: 9999,
    open: true
  },
  publicPath: process.env.NODE_ENV === 'DEV' ? '/' : '/reddit-nfl-stats/'
};
