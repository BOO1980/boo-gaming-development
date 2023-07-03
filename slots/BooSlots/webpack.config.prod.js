const path = require("path");

module.exports = {
    resolve:{
        modules:["node_modules", path.resolve(__dirname, "booFW/src")]
    },
    mode:"production",
    entry:{
        main: path.resolve(__dirname, "./booFW/src/index.js")
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