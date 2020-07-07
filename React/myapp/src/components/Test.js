import React from 'react';
import PropTypes from 'prop-types'

class Test extends React.Component{
    // this.prop.num
    static propTypes = {
        num:PropTypes.number,
        length:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),

        // 自定义校验规则：age必须大于18且小于60
        age: (props, propName, comName) => {
            // props:所有传入属性
            // propName: 当前属性名
            // comName: 组件名
            console.log(props,propName,comName)
            if (props[propName] < 18 || props[propName]>60) {
                return new Error(propName + "必须在18至60岁之间");
            }
        },
    }
    render(){
        return (
            <div>
                Test

                {this.props.num.toFixed(2)}
            </div>
        )
    }
}

// Test.propTypes = {}

export default Test;