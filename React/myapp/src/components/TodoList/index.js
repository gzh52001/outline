import React,{Component,createContext} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

// MyContext就是一个组件
import MyContext from './TodoContext';

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
    removeItem(id){
        
        const {data} = this.state;
        this.setState({
            data:data.filter(item=>item.id!=id)
        });
    }
    changeItem(id){
        const {data} = this.state;
        this.setState({
            data:data.map(item=>{
                if(item.id === id){
                    item.done = true
                }
                return item
            })
        });
    }
    render(){
        const {data} = this.state;
        const doneList = data.filter(item=>item.done);
        const weiDoneList = data.filter(item=>!item.done)
        return (
            <div className="todolist">
                <h1>待办事项</h1>
                <MyContext.Provider value={{remove:this.removeItem,done:this.changeItem}}>
                    <TodoForm addItem={this.addItem}/>
                    <TodoContent data={data} removeItem={this.removeItem} changeItem={this.changeItem}/>
                </MyContext.Provider>
                <div>
                    总数：{data.length}，完成：{doneList.length}，未完成：{weiDoneList.length}
                </div>
            </div>
        )
    }
}

export default TodoList;
