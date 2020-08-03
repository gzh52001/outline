import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import http from '../../utils/http';

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  componentWillMount () { }

  async componentDidMount () {
    // hard code
    // const {data} = await Taro.request({
    //   url:'https://api.qfh5.cn/api/class',
    // });

    const data = await http.get('/api/class')
    console.log('data=',data);

    const user = this.props.store.userStore;
    user.password = 'new password';
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    // counterStore.increment()

    // counterSt+ore.counter++
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        
      </View>
    )
  }
}

export default Index
