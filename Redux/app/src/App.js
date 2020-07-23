import React,{lazy,Suspense} from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import { Menu,Row, Col,Button,Badge  } from 'antd'
import {connect} from 'react-redux';
import {HomeOutlined,UserOutlined,EyeOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import Immutable from 'immutable';

// 传统使用store步骤1：
// import store from './store'
// import 'antd/dist/antd.css'

// 引入样式
import './App.scss';

// UI框架按需加载
// import Menu from 'antd/lib/menu/index'
// import 'antd/lib/menu/style/index.css'

// babel-plugin-import实现antd按需加载
// import { Menu,Row, Col,Button,Badge  } from 'antd'
// 样式不需要额外引入，因为上面的代码会自动编译成以下代码
// import Menu from 'antd/lib/menu/index'
// import 'antd/lib/menu/style/index.css'


// 引入页面组件
// import Home from './pages/Home'
// import Mine from './pages/Mine'
// import Discover from './pages/Discover'
// import Reg from './pages/Reg'
// import Login from './pages/Login'
// import Goods from './pages/Goods'
// import Cart from './pages/Cart'

// 路由懒加载
const Home = lazy(() => import("./pages/Home"));
const Mine = lazy(() => import("./pages/Mine"));
const Discover = lazy(() => import("./pages/Discover"));
const Reg = lazy(() => import("./pages/Reg"));
const Login = lazy(() => import("./pages/Login"));
const Goods = lazy(() => import("./pages/Goods"));
const Cart = lazy(() => import("./pages/Cart"));

const mapStateToProps = (state)=>{
    // state： redux中的state
    // 必须返回一个对象
    console.log('App.state=',state.cart.count())
    return {
        // 这个对象的属性就会自动传入组件的props
        // cartCount:state.cart.cartlist.length
        cartCount:state.cart.count()
    }
}

@withRouter
@connect(mapStateToProps)
class App extends React.Component {
    state = {
        current:'/home',
        menu: [{
            title: '首页',
            path: '/home',
            icon: <HomeOutlined/>,
            component: Home,
        }, {
            title: '我的',
            path: '/mine',
            icon: <UserOutlined/>,
            component: Mine,
        }, {
            title: '发现',
            path: '/discover',
            icon: <EyeOutlined/>,
            component: Discover,
        }, {
            title: '购物车',
            path: '/cart',
            icon: <ShoppingCartOutlined/>,
            component: Cart,
        }]
    }
    changeMenu = ({key,item})=>{
        console.log('key=',key,item);
        this.goto(key);
        this.setState({
            current:key
        })

    }
    goto = (path)=>{
        this.props.history.push(path);
    }
    componentDidMount(){
        console.log('App.props',this.props);
        const {location:{pathname}} = this.props;
        this.setState({
            current:pathname
        })

        // 传统使用store步骤2：
        // store.subscribe(()=>{
        //     this.forceUpdate();
        // })

    }
    render() {
        console.log('App.props=',this.props);
        const { menu,current } = this.state;

        // 传统使用store步骤3：
        // const {cartlist} = store.getState();

        const {cartCount} = this.props;
        return (
            <div className="container">
                <Row gutter={10} style={{backgroundColor:'#001529'}}>
                    <Col span={16}>
                    <Menu 
                    mode="horizontal" 
                    theme="dark"
                    onClick={this.changeMenu}
                    selectedKeys={[current]}
                    >
                        {
                            menu.map(item=>(
                                <Menu.Item title={item.title} key={item.path} icon={item.icon}>
                                    {
                                        item.path === '/cart' ? 
                                        <Badge count={cartCount}>
                                        {item.title}
                                        </Badge>:
                                        item.title
                                    }
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                    </Col>
                    <Col span={8} className="login-button">
                        <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                        <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                    </Col>
                    
                </Row>
                <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    {
                        menu.map(item => <Route key={item.path} path={item.path} component={item.component} />)
                    }
                    <Route path='/goods/:id' component={Goods} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Redirect from='/' to='/home' exact />
                </Switch>
            </Suspense>
            </div>
        )
    }
}

// withRouter = (InnerComponent)=>{
//     return function(){
//         return <InnerComponent />
//     }
// }
// connect = ()=>{
//     return function(InnerComponent){
//         return function(){
//             <InnerComponent />
//         }
//     }
// }

// App = withRouter(App)

// App = connect(mapStateToProps)(App)

export default App;