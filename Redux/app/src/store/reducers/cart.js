import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CHANGE_QTY } from '../actions/cart'

import Immutable,{Map,List} from 'immutable';


// 初始状态
const initState = Map({
    cartlist: List([
    Map({
        goods_id: 1,
        goods_name: '2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
        goods_price: '158.00',
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
        goods_qty: 1
    }), Map({
        goods_id: 2,
        goods_name: '裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL',
        goods_price: '119.00',
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_360.jpg',
        goods_qty: 2
    })]),
    totalPrice: 0,
    step: Map({
        name:'shopping cart',
        des:'购物车'
    })
})

/* // 普通对象的读取
// initState.step.name ;//shopping cart
// initState.user.username ;//cannot read the property username of undefined

// const imState = Immutable.fromJS(initState);
const imState = Map({
    cartlist: List([
    Map({
        goods_id: 1,
        goods_name: '2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
        goods_price: '158.00',
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
        goods_qty: 1
    }), Map({
        goods_id: 2,
        goods_name: '裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL',
        goods_price: '119.00',
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_360.jpg',
        goods_qty: 2
    })]),
    step: Map({
        name:'shopping cart',
        des:'购物车'
    }),
    totalPrice:10
})
console.log('imState=',imState);

// 1. 读取immutableData
console.log('totalPrice=',imState.get('totalPrice'));
console.log('cartlist=',imState.get('cartlist').get(0));
console.log('cartlist2=',imState.getIn(['cartlist',0]));

// 获取step.name
console.log('step.name=',imState.getIn(['step','name']));
console.log('读取不存在的属性=',imState.getIn(['user','username']));

// 2. 修改immutableData，不可变数据
console.log('==============修改==============')

// 新增属性
const newImState = imState.set('user','laoxie')
console.log('imState=',imState.toJS())
console.log('newImState=',newImState.toJS())

// 修改已有属性
const newImState2 = imState.update('totalPrice',(val)=>{
    console.log('val=',val);
    return val*10;
});
console.log('newImState2=',newImState2.toJS())
// 修改深层次属性
const newImState3 = imState.updateIn(['cartlist',1,'goods_qty'],(val)=>{
    console.log('goods_qty=',val);
    return val+1;
});
console.log('newImState3=',newImState3.toJS())

// const imList = List([10,20,List(['a','b','c'])]);
// const imList = Immutable.fromJS(List);
// console.log('imList=',imList) */


// immutable判断两个对象是否一致
const obj1 = {
    username:'laoxie',
    password:123
}
const obj2 = {
    username:'laoxie',
    password:123
}
console.log('obj1==obj2',obj1==obj2);
const imObj1 = Map(obj1);
const imObj2 = Map(obj2);
console.log('Immutable.is(imObj1,imObj2)',Immutable.is(imObj1,imObj2));

// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）
function reducer(state = initState, action) {
    console.log('initState',state);
    switch (action.type) {
        // 添加商品
        case ADD_TO_CART:
            // 返回一个新的State，这个state会自动覆盖store中的旧数据
            // return {
            //     ...state,
            //     cartlist: [action.goods, ...state.cartlist]
            // }
            return state.get('cartlist').unshift(Map(action.goods))
        // 删除商品
        case REMOVE_FROM_CART:
            // return {
            //     ...state,
            //     cartlist: state.cartlist.filter(item => item.goods_id != action.goods_id)
            // }
            let idx;
            for(let i=0;i<state.get('cartlist').count();i++){
                if(state.getIn(['cartlist',i]).get('goods_id') === action.goods_id){
                    idx = i;
                    break;
                }
            }

            return state.deleteIn(['cartlist',idx]);

        // 修改数量
        case CHANGE_QTY:
            
            return {
                ...state,
                cartlist: state.cartlist.map(item => {
                    if (item.goods_id === action.goods_id) {
                        item.goods_qty = action.goods_qty
                    }
                    return item;
                })
            }

        // 清空商品
        case CLEAR_CART:
            // return {
            //     ...state,
            //     cartlist: []
            // }
            return state.update('cartlist',()=>List([]))
        default:
            return state;
    }
}

export default reducer;