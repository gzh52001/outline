import React,{Component} from 'react';

import List from './components/List';
import TodoList from './components/TodoList/index'
import Test from './components/Test'

// function App() {
//   let qty = 10;
//   const changeQty = ()=>{
//     qty++;
//     console.log(qty)
//   }
//   return (
//     <div className="App">
//       {qty}

//       <button onClick={changeQty}>修改qty</button>
//     </div>
//   );
// }

class App extends Component{
  // 构造器：类实例化时执行
  constructor(){
    // 如果当前类是继承自某一个父类，必须要调用super后才能使用this
    super();

    // 类组件的状态（数据）
    this.state = {
      qty:10,
      userlist:[{
        username:'laoxie',
        password:123456,
        age:18
      },{
        username:'linjie',
        password:123,
        age:19
      },{
        username:'jingjing',
        password:123,
        age:28
      }]
    }

    // 覆盖changeQty方法
    this.changeQty = this.changeQty.bind(this);// bind返回一个改变了this指向后的函数
    this.changeLaoxie = this.changeLaoxie.bind(this);// bind返回一个改变了this指向后的函数
  }
  changeQty(){
    // 自定义方法默认没有this指向
    const qty = this.state.qty+1;
    // this.state.qty = this.state.qty+10;
    // this.forceUpdate();
    this.setState({
      qty // this.state.qty++
    });
  }
  changeLaoxie(){
    const {userlist} = this.state;

    userlist[0].age = 19;
    console.log('changeLaoxie')
    this.setState({
      userlist
    })
  }
  render(){
    console.log('render')
    return <div>
      {this.state.qty}

      <button onClick={this.changeQty}>修改qty</button>
      <button onClick={this.changeLaoxie}>修改laoxie</button>

      <List data={this.state.userlist}/>

      <TodoList/>

      <Test num={10} length="5" age="19"/>
    </div>

  }
}

export default App;
