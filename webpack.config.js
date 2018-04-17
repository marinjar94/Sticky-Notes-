var path = require("path");

var DIST_DIR=path.resolve(__dirname, "dist");
var SRC_DIR=path.resolve(__dirname, "src");

var config ={
    mode:'development',
    entry: __dirname+"/src/app/index.js",
    output: {
        path: __dirname +"/dist",
        filename: "bundle.js",
        publicPath:"/app/"
    },
    module:{
        rules:[
            {
            test:/\.js?/,
            exclude: /node_modules/,
            loader:"babel-loader",
            query:{
                presets:["react","es2015","stage-2"]
                }
            }
        ]
    }

};      

module.exports=config; 