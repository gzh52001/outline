import React from 'react';


class Goods extends React.Component{
    componentDidMount(){
        // 发起ajax请求
        console.log('Goods.props',this.props);
    }
    render(){
        const {id} = this.props.match.params
        return (
            <div>
                Goods:商品{id}
            </div>
        )
    }
}


export default Goods;