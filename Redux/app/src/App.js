import React from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import { Menu,Row, Col,Button } from 'antd'

import {HomeOutlined,UserOutlined,EyeOutlined,ShoppingCartOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css'

// 引入样式
import './App.scss';

// 引入页面组件
import Home from './pages/Home'
import Mine from './pages/Mine'
import Discover from './pages/Discover'
import Reg from './pages/Reg'
import Login from './pages/Login'
import Goods from './pages/Goods'
import Cart from './pages/Cart'

@withRouter
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
    }
    render() {
        const { menu,current } = this.state;
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
                                <Menu.Item title={item.title} key={item.path} icon={item.icon}>{item.title}</Menu.Item>
                            ))
                        }
                    </Menu>
                    </Col>
                    <Col span={8} className="login-button">
                        <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                        <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                    </Col>
                    
                </Row>
                
                <Switch>
                    {
                        menu.map(item => <Route key={item.path} path={item.path} component={item.component} />)
                    }
                    <Route path='/goods/:id' component={Goods} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Redirect from='/' to='/home' exact />
                </Switch>
            </div>
        )
    }
}

export default App;