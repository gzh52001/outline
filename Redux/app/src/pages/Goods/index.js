import React,{Component} from 'react';
import { Button,Row,Col,Descriptions } from 'antd';
import {ShoppingCartOutlined,ShoppingOutlined} from '@ant-design/icons'
import http,{request} from '@/utils/http';

import store from '../../store';

const state = store.getState();
store.subscribe(function(){
    console.log('修改',JSON.stringify(store.getState()));
})
console.log('store',store);
console.log('state',state);
store.dispatch({
    type:'add_to_cart',
    goods:{
            goods_id:10086,
            goods_name:'2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 咖啡色 XL',
            goods_price:'158.00',
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617413539238_360.jpg',
            goods_qty:1
    }
});

setTimeout(()=>{
    store.dispatch({
        type:'change_qty',
        goods_id:10086,
        goods_qty:5
    })

},3000)

import './style.scss';
class Goods extends Component{
    state = {
        data:{}
    }
    add2cart = ()=>{

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
                imgurl:datas.goods_image,
            }
        })
    }
    render(){
        console.log('Goods',this.props)
        const {data} = this.state;
        return (
            <div className="goods">
                <div className="info">
                    <img src={data.imgurl}/>
                    <h1>{data.goods_name}</h1>
                    <div className="price">
                        <p>原价：<del>${data.goods_marketprice}</del></p>
                        <p>现价：<span>{data.goods_price}</span></p>
                        <p>秒杀价：<span>{data.goods_promotion_price}</span></p>
                    </div>
                </div>
                <Button.Group>
                    <Button type="primary" size="large" icon={<ShoppingCartOutlined />}>添加到购物车</Button>
                    <Button type="danger" size="large" icon={<ShoppingOutlined />} onClick={this.buyNow}>立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Goods;