import React,{Component} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    title: '实现个小目标，赚他1个亿',
                    done: false,
                    addtime: Date.now()
                },
                {
                    id: 2,
                    title: '月薪过万',
                    done: false,
                    addtime: Date.now() + 100
                }

            ]
        }

        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.changeItem = this.changeItem.bind(this)
    }

    // 谁的数据谁修改
    // 添加
    addItem(title){
        const {data} = this.state;
        const newData = {
            id: data.length+1,
            title,
            done: false,
            addtime: Date.now()
        }
        this.setState({
            data:[newData,...data]
        })
    }
    removeItem(){

    }
    changeItem(){

    }
    render(){
        const {data} = this.state;
        return (
            <div className="todolist">
                <TodoForm addItem={this.addItem}/>
                <TodoContent data={data}/>
            </div>
        )
    }
}

export default TodoList;
