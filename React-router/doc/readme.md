## React-Router
* 应用类型
    * 单页面应用SPA(single page appliction)
        * inde.html (#app)
        * 路由跳转
    * 多页面应用MPA(multiple page appliction)
        * a标签跳转
* 路由模式
    * hash
        > 利用hash值改变进行页面内容更新
    * history
        > 利用html5新特性实现页面内容更新
    ```js
        // Vue通过配置改变路由模式
        new VueRouter({
            mode:'history'
        });

        // React通过组件改变路由模式
        <HashRouter/>
        <BrowserRouter/>
    ```

* 路由渲染
    * Route
    * Redirect

    * 404页面
* 路由跳转
    * 声明式导航
        * Link
        * NavLink
    * 编程式导航
        > 需要使用history对象，如何获取history对象
        * 