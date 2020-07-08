import React from 'react'

class Lifecycle extends React.Component{
// class Lifecycle extends React.PureComponent{
    constructor(){
        // 初始化
        super();
        console.log('constructor');
        this.state = {
            qty:1
        }
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')

        // 发起ajax请求
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate')

        // 避免死循环
        if(prevState.page !== this.state.page){
            // 发起ajax请求，请求第二页的数据
            // this.setState({
            //     datalist
            // })

        }
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    // 一般用于性能优化
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        console.log(nextState,this.state)
        // 该生命周函数必须返回一个boolean，默认返回true
        if(nextState.qty%5 === 0){
            return true
        }
        return false
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');

        // 取消ajax请求
        // 请求定时器..
    }

    // 往原型中写入方法
    changeNum(){

    }

    // 往实例中写入方法
    changeQty = ()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }
    render(){
        console.log('render',this)
        return (
            <div>
                <h1>生命周函数演示</h1>
                    <button onClick={this.changeQty}>修改qty: {this.state.qty}</button>
            </div>
        )
    }
}

export default Lifecycle;