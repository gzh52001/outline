# React

# day1

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


# Day2

## 复习
* 创建虚拟节点：React.createElement(type)
* 渲染节点：ReactDOM.rend(Vnode,target)
* JSX
    > ES的扩展，浏览器无法识别，必须使用babel工具进行编译（运行时|编译时）
    * 规则
        1. 不能使用js关键字
            * class
            * for
        2. 属性名使用驼峰写法
            * className
            * htmlFor
            * onClick,onKeyUp
            * autoFocus
            * ...
        3. 必须结束标签
        4. style必须使用对象，css属性必须使用驼峰
        5. ...
    ```js
        const Button = <button>购买</button>
    ```
* 虚拟DOM(VNode....)
    > 一个结构类似于真实DOM节点的js对象
    * diff算法
        * type
        * key
* 组件
    > 为什么需要组件：复用+维护
    * 函数组件（无状态组件，UI组件）推荐使用
    * 类组件（状态组件，容器组件）
    > 什么时候使用函数组件？什么时候使用类组件

    * 组件在什么时候会刷新
        1. state有修改时
        2. props有修改时
        3. 父组件刷新时
        4. 强制刷新：`this.forceUpdate()`

* 组件数据挂载方式
    * 基本挂载方式：{}
    * 列表渲染
        * key：唯一且稳定

    ```js
        const className = 'h52001'
        const datalist = [{},{}]
        <div>{className}</div>
        <ul>
            {datalist.map(item=><li key={}></li>)}
        </ul>
    ```
    * 事件绑定
        ```js
            <button onClick={this.handle}></button>
        ```
        * event对象：事件处理函数的最后一个参数
        * 传参
            * bind
                * 通过bind改变this指向，只会生效第一次
                * 任意数量参数的传递
    * this指向
        * render    this指向实例
        * construtor    
            * super()   this指向实例
        * 自定义函数默认没有this
            * 改变this指向
                * bind
                * 箭头函数

    * state
        > 组件中的状态修改会自动刷新组件
        * 定义
        ```js
            constructor(){
                super();
                this.state = {
                    a:10,
                    b:20
                }
            }
        ```
        * 使用
        ```js
            this.state.a;//10
        ```
        * 修改
        ```js
            // 只会修改state中的a属性，不会影响其他属性
            // Object.assign(o1,o2)
            this.setState({
                a:11
            })
        ```
        * 状态提升：把数据放到多个组件共同的父级
        * state的修改原则：
            * 创建新的，覆盖旧的
            * 谁的数据谁修改
    * props
        * 如何获取props
            * 函数组件：函数的第一个参数
            * 函数组件：this.props
        * 数据类型校验

    * 条件渲染
        > 三元运算
    * 获取真实节点：ref
    
## 组件通讯
* 父子通讯：props
* 子父通讯：传递函数到子组件执行
* 深层次数组通讯
    * 逐层传递（不推荐）
    * context

## 受控组件与非受控组建
* 受控组件：表单的值受到组件state的控制
* 非受控组建：表单的值不受组件state的控制（原生方式获取）

# day3

## 复习
* 组件结构
    * 分析页面结构，提取组件
* 组件类型
    * 函数组件（无状态组件，UI组件）
        > 尽量使用函数组件来实现效果
    * 类组件（状态组件，容器组件）
        * state
        * this
        * 生命周期函数
* 组件通讯
    * 父->子：props
    * 子->父：传递函数到子组件执行
    * 兄弟->兄弟：状态提升
    * 多层级组件通讯
        * 逐层传递
        * context
* 组件数据挂载方式
    * 数据驱动
        state.qty=1 -> 2 -> 3 -> 1
        this.setState({
            qty:2
        },()=>{

        });
        console.log(this.state.qty)
    * 获取真实节点：ref
        ```js
            const getNode = (ele)=>{
                this.title = ele;
            }
            <input ref={getNode} value={this.state.qty} onChange={} />

            this.title.focus();


        ```
    * 受控组件与非受控组件

## 知识点
* React生命周期
    1. Initial: 初始化阶段
    2. Mounting：挂载阶段
        * componentWillMount
        * componentDidMount
    3. Updating：更新阶段
        * componentWillUpdate
        * componentDidUpdate
    4. Unmounting：卸载阶段
        * componentWillUnmount
    5. 特殊生命周函数
        * shouldComponentUpdate
        * 组件在什么时候下会刷新
            * state修改时
            * props修改时
            * 父组件刷新时
            * 强制刷新
        * PureComponent：已经做了优化后的组件（内部已经实现了shouldComponentUpdate）



## Hook
> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

* 使用Hook注意事项
    1. 只能在函数组件中使用
    2. 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们
    3. 函数组件每次更新都会从上往下执行完内部所有的代码

    ```js
        function Button(){
            // Hook写在此处

            if(){
                // 此处不能使用Hook
            }

            retrun (
                <button></button>
            )
        }

    ```

## 常用Hook
> 增强函数组件的功能
* useState
    > 使函数组件能够实现类组件中的状态
    * 格式：useState(defaultValue)
    > 让我们能够在函数组件中使用State状态，它返回一个数组，数组第一项为state，第覆盖项为修改这个state的方法
    ```js
        const [state,changeState] = useState(1);
        changeState(10);
    ```
* useEffect
    > 使函数组件能够使用类组件中的生命周期函数
    * 格式：useEffect(fn,[...依赖])
    ```js
        useEffect(()=>{
            // 初始化和组件刷新时执行(组件渲染后执行)
            // 等效于：componentDidMount+componentDidUpdate
        })
        useEffect(()=>{
            // 初始化和qty改变时执行
            // 等效于：componentDidMount+优化后的componentDidUpdate
        },[qty])

         useEffect(()=>{
            // 初始化时执行
            // 等效于：componentDidMount
        },[])

        useEffect(()=>{
            return function(){
                // 这里的代码在组件销毁时执行
                // 等效于：componentWillUnmount
            }
        })
    ```
* useMemo
> 一般用户一些比较耗时的计算
```js
    const total = useMemo(function(){
        return cartlist.reduce((pre,item)=>pre+item.price*item.qty,0)
    },[cartlist])
```
* useCallback
```js
    const handle = useCallback(function(){
       // 事件处理函数
    },[])
```

* useContext
> 简化context获取方式
```js
    const MyContext = React.createContext(null);
    <MyContext.Provider value={{ username: "laoxie", age: 18 }}>
        <MyComponent />
    </MyContext.Provider>;

    // 以前的写法
    function MyComponent(){
        return <div>
            <MyContext.Consumer>
                {
                    value=>{
                        return <div>{value.username}</div>
                    }
                }
            </MyContext.Consumer>
        </div>
    }

    // useContext的写法
    function MyCompnent() {
        const user = useContext(MyContext); // laoxie
        return <div>{user.username}</div>;
    }
```
* useReducer
```js
    const initState = {}
    function reducer(state,action){
        switch(action.type){
            case xxx:


            default:
                throw new Error('acton不合法');
        }
    }
    function Cart(){
        const [state,dispatch] = useReducer(reducer,initState)
    }
```
* useRef
* useLayoutEffect