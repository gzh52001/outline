# 微信小程序

## 文件类型
* json  配置文件
* js    逻辑文件
* wxml  结构文件
* wxss  样式文件

## 文件分类
* 全局
* 页面


## wxml
* 数据绑定
* 事件绑定
    * 传递参数
    * event
        * target            触发事件的节点
        * currentTarget     绑定事件的节点
* 列表渲染
    * wx:for
* 条件渲染
    * wx:if
    * wx:else
    * wx:elif

## 场景值
* 切后台
> PS: 在App.onShow中获取场景值，可以根据不同的场景值执行不同的操作

## 小程序页面跳转
* 声明式导航：利用小城提供的组件实现
    *  `<navigator>`
* 编程式导航：利用小程序接口实现
    * wx.navigateTo()

>注意: 在小程序开发中没有window的概念，所以在web开发中一些常用的属性/方法，在小程序中无法使用，如：fetch, localStorage,sessionStorage等

## 班级管理系统接口
> 地址：http://api.qfh5.cn
* 班级
    * `get /api/class`      获取所有班级

* 用户
    * `get /api/user`       获取班级所有用户
        * 参数
            * class_id
    * `get /api/user/:id`   获取某个用户
* 分组
    * `get /api/group`      获取班级所有分组
        * 参数
            * class_id
    * `get /api/group/:id`   获取某个分组信息
    * `post /api/group/:id`   修改分组信息
        * 参数
            * name      分组项目名称
            * leader    分组负责人
            * members   分组成员
* 登录
    * `post /api/login`
        * 参数
            * username  用户名
            * password  密码
            * class_id  班级id

## js模块化
* 自定义模块
* 第三方模块

## 模板
1. 使用`<template/>`定义模板
    * name
2. 使用`<import/>`或者`<include/>`引入模板文件
3. 使用`<template/>`使用某一个模板代码
    * is
4. 给模板传递数据
    * data

## wxs模块化
* <wxs/> 组件
    * module
    * src   ： src属性只能使用相对路径
* 注意事项
    * wxs与js语法不同，它有自己的语法，详情请看文档
    * wxs脚本代码不允许调用wx的接口
    * wxs不能与js通讯


## 自定义组件

### 使用步骤
1. 定义一个组件： `Component()`
    * json
    * wxml
    * wxss
    * js
2. 配置
    * `usingComponents`字段配置好**组件名**与**路径**
        * 页面json：定义为局部局端
        * app.json: 定义为全局组件
3. 使用
    ```js
        <my-component />
    ```

* 定义
> 利用`Component(otpions)`方法实现组件的自定义

* 参数
    > 小程序              Vue
    * properties        props           父组件传入的数组
    * data              data            组件数据
    * methods           methods         方法
    * observers         watch           监听属性修改
    * behaviors         minxin          组件公共代码

```js
    //  Vue
    // myMixin.js
    export default {
        data(){
            return {
                a:10,
                b:20
            }
        },
        created(){
            console.log('mixin created')
        }
    }

    // component/list.vue
    import myMixin from '../myMixin';

    export default {
        mixins:[myMixin],
        data(){
            return {
                user:'page'
            }
        },
        methods:{

        },
        created(){

        },
        mounted(){

        }
    }
```

* 使用
    ```json
        {
        "usingComponents": {
            // 格式：
            // "组件名":"组件路径"
        }
    ```

## 组件通讯
* 父传子：properties
* 子传父：自定义事件+触发
```js
    // this.$emit()
    <my-component bind:data="handleData"/>
    // this.triggerEvent(type,detail,options)
    this.triggerEvent('data',{username:'laoxie'})
```

## 自定义tabbar
> 就是一个自定义组件

1. 在根目录创建一个名为`custom-tab-bar`的目录，并定义以下文件
    * index.js
    * index.json
    * index.wxml
    * index.wxss
2. 在app.json中定义tabBar字段
    * list: 用于区分是否为tabBar页面
    * custom: true  是否使用自定义tabBar

### 获取tabar实例
> this.getTabBar() 返回tabbar实例

### 获取当前页面栈
> this.getCurrentPages()    


## 第三方组件库
> 别人已经写好的自定义组件
* weui组件库


## ssl整数绑定
```
    # nginx配置ssl

    # 接口服务器
    server {
        listen       443 ssl;
        server_name  api.qfh5.cn;

        ssl_certificate     C:/nginx-1.17.1/ssl/4285263_api.qfh5.cn.pem;
        ssl_certificate_key  C:/nginx-1.17.1/ssl/4285263_api.qfh5.cn.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass http://127.0.0.1:2020;
            proxy_set_header HOST $http_host;
        }
    }

    # http->https
    server {
        listen 80;
        server_name api.qfh5.cn;
        return 301 https://$server_name$request_uri;
    }

```