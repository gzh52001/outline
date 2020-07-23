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
    

* Action Creator
    > 为了简化代码，封装一个用于生成action函数


## day6-3

### 复习


### 知识点
* 修改数量需求：修改数量时，先请求服务器拿到库存信息，然后判断库存是否充足
    * 充足：可以修改数量
    * 不足：不允许修改数量

* redux-saga
    * 生成器函数 Generator
        > 返回一个迭代器
    * 迭代器 Iterator
        > iterable 可迭代性
        * next()方法

    ```js
        function show(){
            return 100
        }

        show();//undefined

        async function show(){
            return 100
        }
        show();//Promise

        function* show(){
            return 100;
        }
        show();// Iterator

    ```

* for...of 
> 用于遍历具有迭代器的数据
```js
    const obj = {
        username:'laoxie',
        password:1234
    }

    for(let key in obj){

    }

    // for...of
    for(let key of obj){
        // obj is not iterable  obj不是一个迭代器
    }
```


* action
    * reducer action
    * saga action

* 利用发布者订阅者模式实现简易版redux
```js
    function createStore(reducer){
        let state = reducer();

        const listeners = [];

        const getState = function(){
            return state;
        }

        // 订阅
        const subscribe = function(listener){
            listeners.push(listener)
            return function(){
                // listeners = listeners.filter(item=>item!==listener)
                const idx = listeners.indexOf(listener);
                listeners.splice(idx,1);
            }
        }

        // 发布
        const dispatch = function(action){
            state = reducer(state,action);

            // 触发所有监听
            for(let i=0;i<listeners.length;i++){
                listeners[i]();
            }

            return action;
        }

        return {
            getState,
            subscribe,
            dispatch,
            replaceReducer
        }
    }


    const store = createStore(reducer);

    // 获取state
    store.getState(); // 得到state

    // 监听state修改：订阅
    const unsubscribe1 = store.subscribe(function(){
        console.log('订阅')
    });
    unsubscribe1();

    const unsubscribe2 = store.subscribe(function(){
        console.log('订阅')
    })
    unsubscribe2();

    store.subscribe(function(){
        console.log('订阅')
    })
    
    // 修改state
    store.dispatch({
        type:'ADD_TO_CART',
        goods
    })
```

* code review  代码审核


## 不可变数据

* 可变数据Mutable Data
```js
    const goods = {
        name:'huawei mate40 pro',
        price:5999,
        qty:10
    }

    let current = goods;

    goods.price = 4999;
    goods.marketPrice = 5999;

    delete goods.qty;

    // 如何解决goods被修改，current跟着改变的问题（改A废B）
    // * 深拷贝：deepCopy
        // * JSON.parse(JSON.stringify(goods))
        // * 递归
        // * 第三方工具：jQuery.clone(true), lodash, underscore
    // * 浅拷贝：shallowCopy
        // * 遍历
        // * Object.assign()
```

* 不可变数据Immutable Data
>Immutable Data 是一旦创建，就不能再被更改的数据，对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象

* immutable.js
> 采用数据**结构共享**的方式来实现
结构共享：指没有改变的数据共用一个引用，这样既减少了深拷贝的性能消耗，也减少了内存
```js
    const goods = {
        name:'huawei mate40 pro',
        price:5999,
        qty:10
    }
    goods.name; // huawei mate40 pro
    let newGoods = goods;

    // 深拷贝：内存占用与CPU资源循环

    // 结构共享：结合数据引用与深拷贝的优点

    // 把js数据变成immutable数据
    const imGoods = immutable.fromJS(goods)
```

* 定义一个immutableData
    * fromJS() 不推荐
    * Map()
    * List()
* immutableData的操作
    * 增
        * set(key,val)
        * setIn(keys,val)
    * 删
        * delete(key)
        * deleteIn(keys)
    * 改
        * update(key,val=>newValue)
        * updateIn(keys,val=>newValue)
    * 查
        * get(key)
        * getIn(keys)
        
* 判断两个对象是否一致
```js
    let obj1 = {
        name：'a',
        password:123
    }

    let obj2 = {
        name：'a',
        password:123
    }
    // js的方式
    if(obj1 === obj2){

    }

    // immutable
    Immutable.is(imB,imB)

```

* 合并
merge()/mergeDeep()
```js
    let obj1 = {
        name：'a',
        password:123,
        age:18,
        score:{
            english:100,
            math:120,
            chinese:150
        }
    }

    let obj2 = {
        name：'b',
        password:123456,
        score:{
            math:140
        }
    }

    Object.assign(obj1,obj2);//{name:'b',password:123456,age:18,score:{math:140}}

    // immutableData
    const mayun = Map({
          username:'马云',
          money:150000000000,
          info:{
              married:true,
              witticism:'我没见过钱，我对钱不感兴趣'
          }
      })
      const laoxie = Map({
          username:'laoxie',
          gender:'男',
          info:{
              married:false,
              age:18,
          }
      })
      const newImData = mayun.merge(laoxie);// {username:'laoxie',gender:'男',money:150000000000,info:{married:false,age:18}}

      const newImData2 = mayun.mergeDeep(laoxie);
      //输出 ：{username:'laoxie',gender:'男',money:150000000000,info:{married:false,age:18,witticism:'我没见过钱，我对钱不感兴趣'}}
```