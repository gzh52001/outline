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
        

## day4

## 复习
* 生命周函数
    * 什么时候执行
    * 适合做什么
* React-Router
    * 一切皆组件
    * 路由类型
        * HashRouter
        * BrowserRouter
    * 路由配置
        * Switch
        * Route
        * Redirect
    * 路由跳转
        * 生命之导航
            * Link
            * NavLink
                * replace
                * to: String|Object
        * 编程式导航
            > 如何获取history,location,match
            * history.push()
            * history.replace() 
        * 传参
        * 高阶组件
        ```js
            import {Route} from 'react-router-dom';

            function Route({path,component:Com}){
                // 判断路由类型
                // 获取浏览器路径
                // 获取history,match,location
                return <Com history match location/>
                //return React.createElement(Com,{history, match, location})
            }
            function Home(props){
                console.log(props.history)
            }
            <Route path='/home' component={Home} />

            <Link to='/home'>   //等效于 history.push('/home')
            <Link to='/home' replace>   //等效于 history.replace('/home')
        ```

## 知识点

### 高阶组件
> 高阶组件并不是一个React组件，而是一个纯函数
* 纯函数：
    * 不修改传入的参数
    * 相同的输入绝对得到相同的结果
```js
    function sum(a,b){
        return a+b;
    }
    sum(10,5);//15
    sum(10,5);//15

    function randomNumber(min,max){
        return (Math.random()*max-min+1)+min;
    }

```

* 自定义高阶组件

```js
    // 封装高阶组件
    // 传入一个组件，返回一个新的组件
    function withUser(InnerComponent){
        return class OuterComponent extends React.Component{
            constructor(){
                super();
                this.state = {
                    userInfo:{}
                }
            }
            componentDidMount(){
                let userInfo
                try{
                    userInfo = localStorage.getItem('userInfo');
                    userInfo = JSON.parse(userInfo)
                }catch(err){
                    userInfo = {}
                }

                this.setState({
                    userInfo
                })
            }
            render(){
                const {userInfo} = this.state;
                return <InnerComponent userInfo={userInfo}></InnerComponent>
            }
        }

        // return function OuterComponent(){
        //     return <InnerComponent></InnerComponent>
        // }
    }
    // home,cart,mine, login
    function Home(props){
        // 如果包装函数没有传递location,history,match，这里无法获取得到
        // 获取 userInfo
        // let userInfo
        // try{
        //     userInfo = localStorage.getItem('userInfo');
        //     userInfo = JSON.parse(userInfo)
        // }catch(err){
        //     userInfo = {}
        // }
        // this.setState({
        //     userInfo
        // })
    }
    Home = withUser(Home);

    // 利用Route渲染的组件，默认通过props传入history,location,match
    <Route path='/home' component={Home} /> 

    function Cart(props){
        // 获取 userInfo
        props.userInfo
    }
    function Mine(props){
        // 获取 userInfo
    }

    function Login(){
        // 服务器返回userInfo -> 存入localStorage
    }
    
```