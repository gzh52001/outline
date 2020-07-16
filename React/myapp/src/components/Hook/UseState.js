import React,{useState} from 'react';

function UseState(){
    // let qty = 1;
    // const handle = ()=>{
    //     qty = qty+1;
    //     console.log('qty=',qty)
    // }
    console.log('UseState')
    const [qty,changeQty] = useState(1);

    return (
        <div>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>修改数量：{qty}</button>
        </div>
    )
}

export default UseState;