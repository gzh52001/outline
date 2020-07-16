import React,{useState,useEffect,useCallback,useReducer,useMemo} from 'react';

const initState = [
    { id:1,name: "goods1", price: 98, qty: 2 },
    { id:2,name: "goods2", price: 198, qty: 2 },
    { id:3,name: "goods3", price: 998, qty: 1 },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.name != action.name);
        case 'change':
            return state.map(item=>{
                if(item.id === action.id){
                    item.qty = action.qty;
                }
                return item;
            })
        default:
            throw new Error('type error');
    }
}

function UseReducer(){
   
    let [state, dispatch] = useReducer(reducer, initState);
    const changeQty = useCallback((id,e)=>{
        dispatch({
            type:'change',
            id,
            qty:e.target.value
        })
    },[]);

    const total = useMemo(()=>{
        return state.reduce((pre,item)=>pre+item.qty*item.price,0);
    },[state]);
    return (
        <div>
            {
                state.map(item=><div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>价格：{item.price} &times; <input type="number" value={item.qty} onChange={changeQty.bind(null,item.id)} /></p>
                </div>)
            }
            <p>总价:{total}</p>
        </div>
    )
}

export default UseReducer;

