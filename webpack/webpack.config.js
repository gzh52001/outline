/**
 * webpack配置文件，遵循commonJS规范
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

 module.exports = {
    // 入口
    entry:'./src/index.js', //main.js

    // 出口
    output:{
        path:path.join(__dirname,'dist'),
        filename:"[name].[hash:5].bundle.js", // main.sdlkjfsld.boundle.js
    },

    // 服务器
    devServer:{
        contentBase: path.join(__dirname,'public'),

        // 外部可访问
        // host:'0.0.0.0',

        port:2001
    },

    // 加载器
    module:{
        rules:[
            {
                // 匹配规则
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }],

                // loader为use的简化写法
                // loader:['babel-loader']
            }
        ]
    },

    // 插件
    plugins:[
        new CleanWebpackPlugin(),
        
        // 插件的作用：生成一个html文件
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'public/template.html'),
            title:'React项目首页'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'login.html',
        //     title:'登录',
        //     template:path.join(__dirname,'public/template.html')
        // })
    ]
}