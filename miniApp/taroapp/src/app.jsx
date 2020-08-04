import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Taro from '@tarojs/taro';

import counterStore from './store/counter'
// import 'taro-ui/dist/style/index.scss'

import './app.scss'

const store = {
  counterStore
}

class App extends Component {
  componentDidMount () {
    Taro.cloud.init({
      env: 'qf-52690b'
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
