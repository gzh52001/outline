import React from 'react';

// 传递属性
// 作用：往组件传递属性，提取公共代码
export function withUser(InnerComponent){
    class OuterComponent extends React.Component{
        constructor(){
            super();
            this.state = {
                userInfo:{}
            }
        }
        componentDidMount(){
            console.log('OuterComponent.props',this.props)
            let userInfo
            try{
                userInfo = localStorage.getItem('userInfo');
                userInfo = JSON.parse(userInfo)
            }catch(err){
                userInfo = {}
            }

            this.setState({
                userInfo
            })
        }

        render(){
            return <InnerComponent {...this.state} {...this.props} />
        }
    }

    // return function OuterComponent(){
    //     return <InnerComponent></InnerComponent>
    // }

    return OuterComponent
}

// 反向继承
// 作用：拦截，如：用户登录后才可访问
export function withLogin(InnerComponent){
    class OuterComponent extends InnerComponent{
        constructor(){
            super();
            // this.state = {
            //     login:false
            // }
            if(!this.state){
                this.state = {}
            }
            this.state.login = false;
        }
        componentDidMount(){
            let userInfo = localStorage.getItem('userInfo');
            console.log('userInfo',userInfo)
            if(userInfo){
                this.setState({
                    login:true
                })
            }

            super.componentDidMount();
        }
        render(){
            const {login} = this.state;
            if(login){
                return super.render();
            }
            return <div>请先登录系统</div>
        }
    }
    return OuterComponent;
}