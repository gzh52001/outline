import {createStore} from 'redux';

// 初始状态
const initState = {
    cartlist:[{
            goods_id:1,
            goods_name:'2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
            goods_price:'158.00',
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
            goods_qty:1
        },{
            goods_id:2,
            goods_name:'裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL',
            goods_price:'119.00',
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_360.jpg',
            goods_qty:2
        }],
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
                cartlist:[action.goods,...state.cartlist]
            }
        // 删除商品
        case 'remove_from_cart':
            return {
                ...state,
                cartlist:state.cartlist.filter(item=>item.goods_id!=action.goods_id)
            }
    
        // 修改数量
        case 'change_qty':
            return {
                ...state,
                cartlist:state.cartlist.map(item=>{
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
                cartlist:[]
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