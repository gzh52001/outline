import React from 'react';
import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import Reg from './pages/Reg';
import Login from './pages/Login';


function App(props) {
  console.log('app.props=',props)
  const menu = [{
    text:'首页',
    path:'/home'
  },{
    text:'注册',
    path:'/reg'
  },{
    text:'登录',
    path:'/login'
  }];

  const goto = (path)=>{
    props.history.push(path);
  }
  return (
    <div className="App">
      <nav>
        <ul>

        {
          menu.map(item=>(
          <li key={item.path} onClick={goto.bind(null,item.path)}>
            {/* <NavLink 
            // to={item.path} 
            to={{pathname:item.path,search:'?id=10'}}
            // activeClassName="active"
            activeStyle={{color:'#fc0',fontSize:30}}
            > */}
              {item.text}
            {/* </NavLink> */}
            </li>
          ))
        }
        </ul>

      </nav>
        <Switch>
          {/* 当浏览器路径匹配path时，渲染component中的组件 */}
          {/* <Route path='/' component={Home} exact /> */}
          <Route path='/home' component={Home} />
          <Route path='/reg' component={Reg} />
          <Route path='/login' component={Login} />
          <Route path='/notfound' component={()=><div>notfound</div>} />
          <Redirect from='/' to='/home' exact />
          <Redirect to="/notfound"/>
        </Switch>
    </div>
  );
}
App = withRouter(App);
export default App;
