import React from 'react';
import {Route,Redirect} from 'react-router-dom'

const Phone = ()=>{
    return <div>Phone</div>
}
const Computer = ()=>{
    return <div>Computer</div>
}
const Pad = ()=>{
    return <div>Pad</div>
}
const Watch = ()=>{
    return <div>Watch</div>
}
const Acc = ()=>{
    return <div>Acc</div>
}


class Category extends React.Component{
    state = {
        menu:[
            {
                path:'/phone',
                component:Phone
            },
            {
                path:'/computer',
                component:Computer
            }
        ]
    }
    componentDidMount(){
        // 发起ajax请求
        console.log('Category.props',this.props);
        
    }
    render(){
        const {menu} = this.state;
        const {match} = this.props;
        const {path,params:{id}} = match;

        return (
            <div>
               {/* <Route path={path+"/phone"} component={Phone} />
               <Route path={path+"/computer"} component={Computer} />
               <Route path={path+"/pad"} component={Pad} />
               <Route path={path+"/watch"} component={Watch} />
               <Route path={path+"/acc"} component={Acc} /> */}
               {
                   menu.map(item=><Route key={item.path} path={path+item.path} component={item.component} />)
               }
               <Redirect from={path} to={path+'/phone'} exact/>
            </div>
        )
    }
}


export default Category;