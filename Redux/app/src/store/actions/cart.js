/**
 * action creator
 */

 export const ADD_TO_CART = 'ADD_TO_CART';
 export const CLEAR_CART = 'CLEAR_CART';
 export const CHANGE_QTY = 'CHANGE_QTY';
 export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function add(goods){
    return {
        type:ADD_TO_CART,
        goods
    }
}
export function change(goods_id,goods_qty){
    return {
        type:CHANGE_QTY,
        goods_id,
        goods_qty
    }
}

export function clear(){
    return {
        type:CLEAR_CART,
    }
}

export function remove(goods_id){
    return {
        type:REMOVE_FROM_CART,
        goods_id
    }
}

export default{
    add,
    change,
    remove,
    clear
}