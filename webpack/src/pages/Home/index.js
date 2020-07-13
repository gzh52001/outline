import React,{Component} from 'react';
import { Carousel,Row,Col } from 'antd';
import http,{request} from '@/utils/http';

import './style.scss';
class Home extends Component{
    state = {
        recommend:[], // 轮播图
        categories:[] // 商品列表数据
    }
    goto = (id)=>{
        this.props.history.push('/goods/'+id);
    }
    async componentDidMount(){
        // fetch('https://www.nanshig.com/mobile/index.php?act=index').then(res=>{
        //     // console.log('res=',res.json());
        //     return res.json();
        // }).then(res=>{
        //     console.log(res);
        // })

        // const result = await fetch('https://www.nanshig.com/mobile/index.php?act=index').then(res=>res.json());
        // console.log('result=',result)


        // 封装
        const {datas} = await http.get('/mobile/index.php',{act:'index'})
        // mobile/index.php?act=index&act=index

        // 格式化数据（数据处理）
        const recommend = datas.slice(0,1).map(item=>item.adv_list.item)[0];
        const categories = datas.slice(1).map(item=>item.goods);

        this.setState({
            recommend:[...recommend,...recommend],
            categories
        })


    }
    render(){
        const {recommend,categories} = this.state;
        console.log(recommend,categories);
        return (
            <div>
                <Carousel className="recommend">
                    {
                        recommend.map((item,idx)=><div key={idx}>
                            <img src={item.image} />
                        </div>)
                    }
                </Carousel>
                <div className="goodslist">
                    {
                        categories.map((item,idx)=>(
                            <div  key={idx}>
                                <h3>{item.title}</h3>
                                <Row gutter={16}>
                                    {
                                        item.item.map((goods)=>(
                                            <Col key={goods.goods_id} className="gutter-row" span={6} onClick={this.goto.bind(this,goods.goods_id)}>
                                                <img src={goods.goods_image} />
                                                <h4>{goods.goods_name}</h4>
                                                <p className="price">
                                                    <del>{goods.goods_price}</del>
                                                    <span>{goods.goods_promotion_price}</span>
                                                </p>
                                            </Col>
                                        ))
                                    }
                                    
                                </Row>
                            </div>
                        ))
                    }
                    

                </div>
            </div>
        )
    }
}

export default Home;