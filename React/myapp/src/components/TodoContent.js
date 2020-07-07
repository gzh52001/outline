import React from 'react';

import TodoItem from './TodoItem'

function TodoContent(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>添加时间</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,idx)=><TodoItem key={item.id} index={idx} data={item}/>)
                }
            </tbody>
        </table>
    )
}

export default TodoContent;