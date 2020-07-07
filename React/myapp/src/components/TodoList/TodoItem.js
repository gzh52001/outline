import React from 'react';

import { formatDate } from '../../utils'

import MyContext from './TodoContext';

function TodoItem({ data, index, removeItem, changeItem }) { // props.item
    // 函数组件中的this为undefined
    console.log('TodoItem:', data, index)
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.title}</td>
            <td>{formatDate(data.addtime)}</td>
            <td>{data.done ? '是' : '否'}</td>
            <td>
                <MyContext.Consumer>
                    {
                        ({ remove, done }) => (
                            <>
                                <button onClick={done.bind(this, data.id)}>完成</button>
                                <button onClick={remove.bind(null, data.id)}>删除</button>
                            </>
                        )
                    }
                </MyContext.Consumer>
                {/* <button onClick={changeItem.bind(this,data.id)}>完成</button>
                <button onClick={removeItem.bind(null,data.id)}>删除</button> */}
            </td>
        </tr>
    )
}


export default TodoItem;