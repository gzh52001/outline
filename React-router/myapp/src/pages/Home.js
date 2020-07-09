import React from 'react';

import {withUser} from '../utils/hoc';

class Home extends React.Component{
    render(){
        console.log('Home.props',this.props);
        return (
            <div>
                Home
            </div>
        )
    }
}

Home = withUser(Home); // Home得到的是高阶组件中的OuterComponent

export default Home;