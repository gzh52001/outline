import React,{useState} from 'react';

import {useStorage} from '../../hooks'

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';


function Hook(){
    const [show,changeShow] = useState(true);
    const [user,changeUser] = useStorage('userInfo');

    console.log('user=',user);
    return (
        <div>
            <h1>Hook</h1>
            {/* <UseState/>
            {
                show ? 
                <UseEffect/>
                :
                <div>组件已销毁</div>
            }
            <button onClick={()=>{
                changeShow(!show)
            }}>{show?'隐藏':'显示'}UseEffect组件</button> */}
            {/* <UseMemo/> */}
            <UseCallback/>

            <UseReducer/>
            <div>
                <h4>自定义Hook</h4>
                {user.username} - {user.age}

                <button onClick={()=>{
                    changeUser({username:'jingjing',age:37,gender:'不详'})
                }}>
                    修改用户
                </button>
            </div>
        </div>
    )
}

export default Hook;