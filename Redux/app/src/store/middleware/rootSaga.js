import { put,call,apply, takeEvery,takeLatest } from 'redux-saga/effects'
import http from '../../utils/http';
import { message } from 'antd'


function* changeCartQty({type,goods_id,goods_qty}){
    console.log('saga changeqty',type,goods_id,goods_qty)

    // 这里就可以发起ajax请求
    const result = yield call(http.get,'/goods/kc',{goods_id},{baseUrl:'http://localhost:20011'})

    if(goods_qty > result.data){
        message.warn('库存不足');
    }else{
        // 触发reducer action
        yield put({
            type:'CHANGE_QTY',
            goods_id,
            goods_qty
        })
    }

}

function * test(){

}

function* init(){
    // 监听用户命令

    // saga action
    // yield takeEvery('CHANGE_QTY_ASYNC',changeCartQty)
    yield takeLatest('CHANGE_QTY_ASYNC',changeCartQty)
    yield takeEvery('TEST_ASYNC',test)
}

export default init;