var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    // devtool:'eval',
    entry:['./src/main.js'],
    output:{
        path:path.resolve(__dirname,'build'),
        // publicPath:path.resolve(__dirname,'build'),
        filename:'js/bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.(jpg|png|svg|gif)$/,
                loader:'url-loader',
                query:{
                    limit:8192,
                    name:'./img/[name].[ext]'
                }
            },
            {
                test:/\.(ttf|woff|eot)$/,
                loader:'url-loader',
                query:{
                    limit:8192,
                    name:'./font/[name].[ext]'
                }
            }
        ]
    },
    // resolve:{
    //     extensions:['js','.jsx','.json']
    // },
    devServer:{
        contentBase:'./build',
        inline:true,
        open:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
            {
                template:__dirname+"/src/index.html"
            }
        )
    ]
}