import React,{useState,useEffect} from 'react';

function UseEffect(){

    console.log('UseEffect')
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(10);

//    useEffect(()=>{
//         // fetch
//        console.log('ajax');
//    },[]); // 等效于componentDidMount

//    useEffect(()=>{
//         // fetch
//         console.log('ajax');
//     });//等效于componentDidMount+componentDidUpdate

    // useEffect(()=>{
    //     // fetch
    //     console.log('ajax');
    // },[num]); // 等效于优化后componentDidUpdate

    useEffect(()=>{
        // fetch
        const timer = setInterval(() => {
            console.log('timer')
        }, 1000);
        return function(){
            // 这里的代码在组件被销毁时执行
            // 可以在这里编写取消ajax请求和取消定时器的代码
            clearInterval(timer);
        }
    },[num]); // 等效于componentWillUnmount


    return (
        <div>
            <h4>useEffect</h4>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>修改qty：{qty}</button>
            <button onClick={()=>{
                changeNum(num+10)
            }}>修改num：{num}</button>
        </div>
    )
}

export default UseEffect;