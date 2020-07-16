import React,{useState,useEffect,useCallback} from 'react';

const callbackList = []

function UseCallback(){
    const [score,changescore] = useState(100)
    const [qty,changeQty] = useState(1)

    const callback = useCallback(()=>{
        return score;
    },[score]);

    // 在函数组件中：事件处理函数的写法
    const handle = useCallback(()=>{
        return score;
    },[]);

    const handle2 = ()=>{
        
    }

    callbackList.push(handle);
    
    // 判断callback是否为同一个函数
    console.log('callbackList',callbackList);
    console.log('是否同一个函数=',callbackList[0] === callbackList[1]);
    
    return (
        <div>
            <h4>useCallback</h4>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>修改qty:{qty}</button>

            <button onClick={()=>{
                changescore(score+10)
            }}>修改score:{score}</button>

            <button onClick={callback}></button>

        </div>
    )
}

export default UseCallback;


// class Home extends React.Component{
//     handleClick(){

//     }
//     render(){
//         return (
//             <button onClick={this.handleClick}>修改qty:{qty}</button>
//         )
//     }
// }