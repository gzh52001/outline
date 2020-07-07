import React, { Component } from 'react';

// function TodoForm(){
//     return (
//         <div>
//             <input type="text" />
//             <button onClick={}>添加</button>
//         </div>
//     )
// }

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            title:''
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.add = this.add.bind(this)
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
    render() {
        const {title} = this.state;
        return (
            <div>
                {/* 利用组件的state来控制表单值的组件称之为：受控组件 */}
                <input type="text" ref={(ele)=>{
                    this.title = ele;
                }} value={title} onChange={this.changeTitle} />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}


export default TodoForm;