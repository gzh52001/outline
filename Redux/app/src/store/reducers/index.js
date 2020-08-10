import {combineReducers} from 'redux';
import cartReducer from './cart';
import userReducer from './user';
import commonReducer from './common';

// 模块化reducer
// 把多个模块reducer合并成一个reducer
const reducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    common:commonReducer
})

export default reducer;