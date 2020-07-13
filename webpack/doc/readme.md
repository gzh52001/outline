# day05


## 复习
* 高阶组件
    * 作用
        * 属性代理：提取公共代码，传递所需属性
        * 反向继承：组件拦截
            * super()
            * 权限管理
    * 定义
        * 是一个纯函数
        * 包装函数
        * 装饰器
    * ES7: @
* 路由参数
    * history
    * location
    * match

* 路由传参
    > 数据持久化
    * search： location
    * state:   location
    * 动态路由：match

## 知识点

### 从零搭建基于Webpack的React环境
> 从0搭建项目
1. 创建目录
2. 安装依赖（React项目）
    * react & react-dom
    * react-router & react-router-dom
    * webpack & webpack-cli & webpack-dev-server
    * @babel/core & babel-loader & @babel/preset-react
    * html-webpack-plugin
    * 样式
        * style-loader
        * css-loader
        * sass-loader
3. 创建webpack配置文件
    > 默认配置文件名：`webpack.config.js`，为一个commonJS模块
    * 配置选项
        * entry
        * output
        * loader
            > module.rules
        * plugins
        * devServer


### UI框架
* ant-design

### ajax
* XMLHttpRequest
* jQuery.ajax()
* axios
* fetch