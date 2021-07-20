const path = require('path')

module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }

  // const withCSS = require('@zeit/next-css')
  // module.exports = withCSS({
  //   cssLoaderOptions: {
  //     url: false
  //   }
  // });
//to detect and upload file-updates automatically 
module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300; //every 300 ms
        return config;
    }
};