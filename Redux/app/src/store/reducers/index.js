import {combineReducers} from 'redux';
import cartReducer from './cart';
import userReducer from './user';

// 模块化reducer
// 把多个模块reducer合并成一个reducer
const reducer = combineReducers({
    cart:cartReducer,
    user:userReducer
})

export default reducer;