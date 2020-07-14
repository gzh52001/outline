# day6-1 Redux


* redux是一个与vuex类似的状态管理工具，redux与react是两个独立产品，跟react没有直接的联系，你可以在react中使用redux, 也可以在vue中使用redux;

* **Redux设计和使用的三项基本原则**
    * 唯一数据源：整个应用只能有一个store
    * 只有store能改变自己的内容
    * Reducer必须是一个纯函数


* 使用redux
    1. 安装redux
    ```js
        npm i -D redux
    ```
    2. 创建存储仓库
    ```js
        const {createStore} from 'redux';

        const reducer = function(state,action){

        }

        const store = createStore(reducer)
    ```
    3. 操作state
        * 获取state
        * 修改state

### 核心Api
* store
    * 常用方法
        * store.getState()          // 获取最新状态
        * store.dispatch(action)    // 修改state状态
        * store.subscribe(fn)       // 监听state的修改
* state
* reducer
> Reducer 必须是一个纯函数，用于指定state修改逻辑（state数据唯一修改方式），它接受当前 state 和 action 作为参数，并根据state和action的值**返回新的state**
```js
    function reducer(state,action){


    }
```
* action    动作、命令
```js
    // 用户修改state的方式
    const action = {
        type:'add_to_cart',
    }
     store.dispatch(action)

```

# day6-2

## 复习
* redux： 是一个状态管理工具，解决数据共享问题，类似于Vuex
    * 核心api
        * store     仓库
        * state     真正存放数据的地方
        * reducer   定义state修改的修改方式，是一个纯函数
        * action    命令、动作，表示用户要干什么
            > 格式：{type}

* 使用redux步骤
    1. 创建一个仓库
    ```js
        import {createStore} from 'redux'

        // 初始状态
        const initState = {
            goodslist:[]
        }

        // reducer
        const reducer = function(state=initState,action){
            // 规则：不能修改传入的参数，且要返回一个新的state
            switch(action.type){
                // 添加商品
                case 'add_to_cart':
                    return {
                        
                    }
                // 修改数量

                // 删除商品

                // 清空购物车

            }
        }

        const store = createStore(reducer)
    ```
    2. 操作state
        * 获取state
            * store.getState() // 得到最新state状态
        * 修改state
            * store.dispatch(action)
        * 监听State修改
            * store.subscribe(fn)


* 使用redux的三大基本原则
    1. 唯一数据源
    2. 只有store能修改state
    3. reducer是一个纯函数


## 知识点
* redux数据与react组件结合的痛点
    * 组件共享
    * 组件刷新
* react-redux
    * 原理
        > 利用**Context**共享redux的数据，并使用**高阶组件**把数据作为props传入组件
    * 使用步骤
        1. 安装
        2. 使用`<Provider/>`组件
        3. 使用高阶组件`connect()`
    