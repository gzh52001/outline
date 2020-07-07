import React, { Component } from 'react';
import MyContext from './TodoContext';

// function TodoForm(){
//     return (
//         <div>
//             <input type="text" />
//             <button onClick={}>添加</button>
//         </div>
//     )
// }

class TodoForm extends Component {
    // 静态属性：需要安装@babel/plugin-proposal-class-properties
    static contextType = MyContext;
    
    constructor(){
        super();
        this.state = {
            title:''
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.add = this.add.bind(this);
        
    }
    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }

    add(){
        const {title} = this.state;

        this.props.addItem(title);// 子->父

        // 清空并自动获得焦点
        this.setState({
            title:''
        })

        this.title.focus();
    }

    // ES6默认不支持，需要@babel/plugin-proposal-class-properties
    enter = (e)=>{
        if(e.keyCode === 13){
            this.add()
        }
    }
    render() {
        const {title} = this.state;
        console.log('totoForm.context=',this.context)
        return (
            <div>
                {/* 利用组件的state来控制表单值的组件称之为：受控组件 */}
                <input type="text" ref={(ele)=>{
                    this.title = ele;
                }} value={title} onChange={this.changeTitle} onKeyUp={this.enter} />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

// 给子组件添加contextType【静态属性】
// TodoForm.contextType = MyContext;

export default TodoForm;