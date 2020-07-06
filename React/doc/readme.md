# React

* React
    * web应用：react-dom
    * native应用：react-native

## 模块化开发
* commonJS: nodejs
* AMD: requireJS
* CMD: seaJS
* ESModule：ES6

* umd：AMD + CMD + 全局使用

## 虚拟DOM（Virtual DOM）
**虚拟DOM是**结构类似于真实DOM节点的**js对象**  
* React.createElement() 创建虚拟节点
* ReactDOM.render() 渲染虚拟DOM
```js
    Object1 = {
        type:'div'
        props:{
            className:'box'
        },
        children:[
            {
                type:'ul'
                children:[{
                    type:'li'
                    children:'初始状态'
                }]
            }
        ]
    }


     Object2 = {
        type:'div'
        props:{
            className:'box'
        },
        children:[
            {
                type:'ul'
                children:[{
                    type:'li'
                    children:'初始状态'
                }]
            }
        ]
    }

```

## JSX
一种特殊的 js 语法，是 ECMAScript 的扩展，可以让我们在 js 代码中使用 html 标签来编写结构，避免繁琐的React.createElement()操作
JSX知识React.createElement()的语法糖，需要balbel对它进行编译成浏览器可识别的代码

```jsx
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="js/browser.js"></script>
    <script type="text/babel">
        const div =  <div id="container">
            <h1>创建虚拟节点</h1>
            <ul>
                <li>data1</li>
                <li>data2</li>
                <li>data3</li>
            </ul>
        </div>


        console.log('div',div);

        // 把虚拟节点渲染为真实DOM
        ReactDOM.render(
            div,
            document.querySelector('#app')
        )
    </script>
```
* JSX的限制跳转
    * js与html编写规则
        * 遇到尖括号`<`，使用html规则解析
        * 遇到花括号`{`，使用js编译规则
    * 不能使用js关键字作为属性
        * class ->  className
        * for -> htmlFor
    * 使用驼峰
        * onclick -> onClick
        * onkeyup -> onKeyUp
    * 必须结束标签
    * style 属性的值接收一个对象，css 的属性必须为驼峰写法


## 组件
* 结构、表现、行为三者分离

* Vue组件定义
    * 全局：Vue.component(name,options)
    * 局部: components:{name:options,name:options}
    * 单文件组件

* React组件定义
    * 函数组件（无状态组件，UI组件）
        * 必须有返回值
    * 类组件（状态组件、容器组件）
        * 必须包含render方法，且有返回值
* React组件的使用
> 组件的定义相当于创建了一个“自定义标签”
```js
    function List(){
        return <div></div>
    }
    <List></List>
```

## React脚手架创建一个项目
* create-react-app


* 包管理工具
    * npm
    * yarn
    * cnpm
    * bower

## 组件数据的挂载方式

### state
* 使用
    ```js
        this.state.xxx
    ```
* 修改
    > 在React中，修改state的规则：创建一个新的数据并覆盖它
    ```js
        this.setState()
    ```

## 组件的更新时机
1. 组件本身的状态发生改变时（适用于类组件）
2. 父组件刷新时
3. 传入的props有修改时
4. 强制刷新（不推荐）