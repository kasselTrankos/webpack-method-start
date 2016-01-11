var webpack = require("webpack")
var browersync = require("browser-sync")
var config = require('./webpack.build');
config.watch = true;
webpack(config, function(error, stats) {
    if(!!server && !!server.active) {
        server.reload()
    }
})
server = browersync({
    server: "./public",
    port: 8080
})
