import React,{Component} from 'react';
import { Button,Row,Col,Descriptions } from 'antd';
import {ShoppingCartOutlined,ShoppingOutlined} from '@ant-design/icons'
import {connect} from 'react-redux';
import http,{request} from '@/utils/http';
import cartAction from '../../store/actions/cart';

// import store from '../../store';

// const state = store.getState();
// store.subscribe(function(){
//     console.log('修改',JSON.stringify(store.getState()));
// })
// console.log('store',store);
// console.log('state',state);
// store.dispatch({
//     type:'add_to_cart',
//     goods:{
//             goods_id:10086,
//             goods_name:'2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
//             goods_price:'158.00',
//             goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
//             goods_qty:1
//     }
// });

// setTimeout(()=>{
//     store.dispatch({
//         type:'change_qty',
//         goods_id:10086,
//         goods_qty:5
//     })

// },3000)

import './style.scss';

@connect((state)=>({
    cartlist:state.cart.cartlist
}),dispatch=>({
     add2cart(goods){
        // dispatch({
        //     type:'add_to_cart',
        //     goods
        // })
        dispatch(cartAction.add(goods))
     },
     changeQty(goods_id,goods_qty){
       dispatch(cartAction.change(goods_id,goods_qty))
     }
}))
class Goods extends Component{
    state = {
        data:{}
    }
    add2cart = ()=>{
        const {data} = this.state;
        const {cartlist,add2cart,changeQty} = this.props;
        const {goods_name,goods_id,goods_price,goods_image} = data;
        // store.dispatch({
        //     type:'add_to_cart',
        //     goods:{
        //         goods_name,
        //         goods_id,
        //         goods_price,
        //         goods_qty:1
        //     }
        // })

        // 判断当前商品是否已经添加到购物车
        // 已添加：修改数量
        // 未添加：添加
        const currentGoods = cartlist.filter(item=>item.goods_id === goods_id)[0];
        if(currentGoods){
            changeQty(goods_id,currentGoods.goods_qty+1)
        }else{
            add2cart({goods_name,goods_id,goods_price,goods_image,goods_qty:1})
        }
    }
    buyNow = ()=>{
        const {history} = this.props;

        this.add2cart();

        history.push('/cart');
    }
    async componentDidMount(){
        // 获取商品id
        const {match} = this.props;
        const {id} = match.params;

        // /mobile/index.php?act=goods&op=goods_detail&goods_id=227330&key=
        const {datas} = await http.get('/mobile/index.php',{
            act:'goods',
            op:'goods_detail',
            goods_id:id,
        });

        console.log('datas=',datas)

        this.setState({
            data:{
                ...datas.goods_info,
                goods_image:datas.goods_image,
            }
        })
    }
    render(){
        console.log('Goods',this.props)
        const {data} = this.state;
        return (
            <div className="goods">
                <div className="info">
                    <img src={data.goods_image}/>
                    <h1>{data.goods_name}</h1>
                    <div className="price">
                        <p>原价：<del>${data.goods_marketprice}</del></p>
                        <p>现价：<span>{data.goods_price}</span></p>
                        <p>秒杀价：<span>{data.goods_promotion_price}</span></p>
                    </div>
                </div>
                <Button.Group>
                    <Button type="primary" size="large" icon={<ShoppingCartOutlined />} onClick={this.add2cart}>添加到购物车</Button>
                    <Button type="danger" size="large" icon={<ShoppingOutlined />} onClick={this.buyNow}>立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Goods;