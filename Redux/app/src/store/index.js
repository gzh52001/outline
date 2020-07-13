import {createStore} from 'redux';

// 初始状态
const initState = {
    goodslist:[],
    totalPrice:0,
    step:0
}

// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function reducer(state=initState,action){
    switch(action.type){

        // 添加商品
        case 'add_to_cart':
            // 返回一个新的State，这个state会自动覆盖store中的旧数据
            return {
                ...state,
                goodslist:[action.goods,...state.goodslist]
            }
        // 删除商品
        case 'remove_from_cart':
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.goods_id!=action.goods_id)
            }
    
        // 修改数量
        case 'change_qty':
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.goods_id === action.goods_id){
                        item.goods_qty = action.goods_qty
                    }
                    return item;
                })
            }
    
        // 清空商品
        case 'clear_cart':
            return {
                ...state,
                goodslist:[]
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

// console.log('store',store);


// // 获取state
// store.getState();

// // 修改State
// // store.dispatch({type:'add_to_cart',goods:{...}})
// // store.dispatch({type:'remove_from_cart',goods_id})
// // store.dispatch({type:'change_qty',goods_id,goods_qty})
// store.dispatch({type:'change_qty'})