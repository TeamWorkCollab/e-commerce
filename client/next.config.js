//to detect and upload file-updates automatically 
module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300; //every 300 ms
        return config;
    }
};