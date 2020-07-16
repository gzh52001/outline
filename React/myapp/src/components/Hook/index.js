import React,{useState} from 'react';

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';


function Hook(){
    const [show,changeShow] = useState(true)
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
        </div>
    )
}

export default Hook;