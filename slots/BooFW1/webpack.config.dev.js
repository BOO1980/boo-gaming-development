const path = require("path");
module.exports = {
    resolve:{
        modules:["node_modules", path.resolve(__dirname, "./booFW/src")]
    },
    mode:"development",
    entry:{
        main: path.resolve(__dirname, "./booFW/src/index.js")
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        hot: false,
        liveReload: true,
        devMiddleWare:{
            writeToDisk: true,
        },
        port:9090,
    },
    devtool: "source-map",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"booFW.js",
        clean: true,
        libraryTarget:"umd",
        library:"Boo"
    }
}