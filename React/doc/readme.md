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