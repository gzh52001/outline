import React from 'react';

import {formatDate} from '../utils'

function TodoItem({data,index}){ // props.item
    console.log('TodoItem:',data,index)
    return (
        <tr>
            <td>{index+1}</td>
            <td>{data.title}</td>
            <td>{formatDate(data.addtime)}</td>
            <td>{data.done ? '是':'否'}</td>
            <td>
                <button>编辑</button>
                <button>删除</button>
            </td>
        </tr>
    )
}


export default TodoItem;