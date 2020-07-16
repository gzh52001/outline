import React,{useState,useEffect,useMemo} from 'react';

function UseMemo(){
    const [num,changeNum] = useState(1)
    const [qty,changeQty] = useState(1)
    // 大量运算的代码，花费事件10s
    const total = useMemo(()=>{
        let total=0;
        for(var i=1;i<=100;i++){
            total += i;
            console.log('花费大量时间的代码');
        }

        return total
    },[num]);

    console.log('total',total);

    // let total=0;
    // for(var i=1;i<=10000;i++){
    //     total += i;
    //     console.log('花费大量时间的代码');
    // }
    // console.log('memo',total)

    return (
        <div>
            <h4>useMemo</h4>
            <button onClick={()=>{
                changeNum(num+1)
            }}>修改num:{num}</button>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>修改qty:{qty}</button>
        </div>
    )
}

export default UseMemo;