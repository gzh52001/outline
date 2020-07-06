import React from 'react';

function List({data}){
    console.log('List',data)
    // [<li key>laoxie</li>,<li>linejie</li>,<li>sdfsd</li>]
    return (
        <div>
            {/* 列表渲染 */}
            <ul>
            {
                data.map((item,idx)=>{
                return <li key={item.username}>
                    <h4>{idx+1} - {item.username}</h4>
                    <p>年龄：{item.age}</p>
                </li>
                })
            }
            </ul>
        </div>
    )
}

export default List;