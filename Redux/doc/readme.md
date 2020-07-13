# Redux

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
