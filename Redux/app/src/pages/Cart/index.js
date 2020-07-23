import React,{Component} from 'react';
import { Button,Row,Col,List,InputNumber,Tooltip,Steps } from 'antd';
import {ShoppingCartOutlined,ShoppingOutlined,CloseOutlined} from '@ant-design/icons'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import cartAction from '@/store/actions/cart';
import http,{request} from '@/utils/http';

import './style.scss';

@connect(({cart})=>{
    const cartlist = cart.get('cartlist').toJS()
    return {
        cartlist,
        totalPrice:cartlist.reduce((prev,item,idx,arr)=>prev+item.goods_price*item.goods_qty,0)
}},(dispatch)=>{
    return {
        removeCart(goods_id){
            // dispatch({
            //     type:'remove_from_cart',
            //     goods_id
            // })
            dispatch(cartAction.remove(goods_id))
        },
        clearCart(){
            dispatch({
                type:'CLEAR_CART',
            })
        },
        changeQty(goods_id,goods_qty){
            console.log('changeQty=',goods_id,goods_qty)
            dispatch({
                type:'CHANGE_QTY_ASYNC',
                goods_id,
                goods_qty
            })
        }
    }

    // bindActionCreators返回一个对象，对象的属性为cartAction中默认导出（export default）的方法
    // const res = bindActionCreators(cartAction,dispatch);
    // {
    //     remove: function(){
    //         dispatch(cartAction.remove(goods_id))
    //     }
    // }
    // console.log('res=',res);
    // return bindActionCreators(cartAction,dispatch);
})
class Cart extends Component{
    state = {
        // goodslist:[{
        //     goods_id:1,
        //     goods_name:'2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
        //     goods_price:'158.00',
        //     goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
        //     goods_qty:1
        // },{
        //     goods_id:2,
        //     goods_name:'裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL',
        //     goods_price:'119.00',
        //     goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_360.jpg',
        //     goods_qty:2
        // },
        // {
        //     goods_id:3,
        //     goods_name:'型男鞋子男秋季透气板鞋韩版潮流百搭帆布鞋休闲布鞋学生鞋男 灰色 42',
        //     goods_price:'125.00',
        //     goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/41/41_05935724160716756_360.jpg',
        //     goods_qty:5
        // }]
    }

    async componentDidMount(){
        // 获取商品id
        
    }
    render(){
        console.log('Cart.props=',this.props)
        const {cartlist,removeCart,clearCart,changeQty,totalPrice,remove,change,clear} = this.props;
        return (
            <div className="cart">
                <Steps size="small" current={0} style={{marginBottom:20}}>
                    <Steps.Step title="购物车" />
                    <Steps.Step title="结算" />
                    <Steps.Step title="支付" />
                </Steps>
                 <List
                    size="large"
                    itemLayout="horizontal"
                    dataSource={cartlist}
                    renderItem={item => (
                    <List.Item extra={
                        <Tooltip title="删除">
                            <Button type="danger" shape="circle" ghost size="small" icon={<CloseOutlined />} onClick={removeCart.bind(this,item.goods_id)}></Button>
                        </Tooltip>
                        }>
                        <List.Item.Meta
                        avatar={<img src={item.goods_image} />}
                        title={<>{item.goods_name}</>}
                        description={
                            <div className="price">
                                <span>{item.goods_price}</span> &times; 
                                <InputNumber size="small" style={{width:60,marginLeft:8}} min={1} max={10} value={item.goods_qty} onChange={changeQty.bind(this,item.goods_id)} />
                            </div>
                        }
                        
                        />
                    </List.Item>
                    )}
                />
                <Row gutter={20}>
                    <Col span={12}>
                        <Button type="danger" ghost onClick={clearCart}>清空购物车</Button>
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}>
                        <Button type="danger">去结算</Button>
                        <p className="price">总价：<span>{totalPrice.toFixed(2)}</span></p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cart;