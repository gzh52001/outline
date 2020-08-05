# Hybrid

## app类型
* WebApp
    * 技术栈：html+css+js
    * 优点：
        * 成本低
        * 跨平台
    * 缺点
        * 不能调用硬件设备
* NativeApp
    * android
        * 技术栈
            * xml
            * java
    * iOS
        * 技术栈
            * xml
            * Object-C/swift

* HybridApp
    > 综合了WebApp与NativeApp的优点，采用半web半Native的开发模式
    * Native主导（主流）
        * 团队内有android/iOS工程师，h5作为协助
    * H5主导
        > 团队内部只有h5工程师

    ```js
        window.app.exit()
    ```


### dcloud平台
* h5 plus： 提供40W+接口供js调用
> 提供一个全局属性`window.plus.xxx`

* 页面跳转
> 操作webview