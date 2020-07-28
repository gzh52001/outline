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
