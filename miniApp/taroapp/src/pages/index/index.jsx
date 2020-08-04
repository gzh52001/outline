import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'
// import {AtButton} from 'taro-ui'
import './index.scss'


@inject('store')
@observer
class Index extends Component {
  state = {
    page:1,
    size:10,
    total:0,
    students:[],
    hasMore:true
  }
  componentWillMount () { }

  componentDidMount () {
    this.getData();
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onReachBottom(){
    const {page,hasMore} = this.state;
    if(!hasMore) return;

    this.setState({
      page:page+1
    },()=>{
      this.getData();
    })
  }

  async getData(){
    let {page,size,students} = this.state;

    Taro.showLoading();

    const {result} = await Taro.cloud.callFunction({
      // 要调用的云函数名称
      name: 'student',
        // 传递给云函数的event参数
      data: {
       type:'find',
       options:{
        page,
        size
       }
      }
    });

    Taro.hideLoading();

    console.log('result=',result)

    if(students.length===0){
      students = result.result
    }else{
      students.push(...result.result)
    }

    this.setState({
      total:result.total,
      students,
      hasMore:students.length<result.total
    });
  }

  onPullDownRefresh(){
    this.setState({
      page:1,
      students:[]
    },()=>{
      this.getData();
    })
  }

  render () {
    const {students,hasMore} = this.state;
    return (
      <View className='datalist'>
        {
          students.map(item=>(
            <View className="item" key={item._id}>
              {item.city}-{item.category}-{item.class}-{item.name}
            </View>
          ))
        }
        
      {
        hasMore ? 
        <View>数据加载中...</View>:
        <View>我是底线的</View>
      }
      </View>
      
      
    )
  }
}

export default Index
