import React from 'react';

import {withLogin} from '@/utils/hoc';

// ES7：装饰器
@withLogin
class Cart extends React.Component{
    state = {
        goodslist:[{
            id:1,
            name:'商品1',
            price:9.8,
            qty:1
        },{
            id:2,
            name:'商品2',
            price:19.8,
            qty:2
        },{
            id:3,
            name:'商品3',
            price:998,
            qty:10
        }]
    }
    goto = (id)=>{
        const {history} = this.props;
        history.push({
            pathname:'/goods/'+id,
            search:'?id='+id,
            state:{
                id
            }
        });
    }
    componentDidMount(){
        // 发起ajax请求
        console.log("Cart.componentDidMount")
    }
    render(){
        console.log('Cart.props',this.props);
        const {goodslist} = this.state;
        return (
            <div>
                Cart
                <ul>
                    {
                        goodslist.map(item=>{
                        return <li key={item.id} onClick={this.goto.bind(this,item.id)}>
                            <h4>{item.name}</h4>
                            <p className='price'>
                                {item.price} &times; {item.qty} = {item.qty*item.price}
                            </p>
                        </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// Cart = withLogin(Cart); // Home得到的是高阶组件中的OuterComponent

export default Cart;