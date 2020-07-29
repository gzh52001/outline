// components/player/player.js
import commonBehavior from '../common';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:'/temp/audio/xxx.mp3'
    }
  },
  

  /**+
   * 组件的初始数据
   */
  data: {
    autoplay:true
  },

  // 组件公共配置
  behaviors:[commonBehavior],

  /**
   * 组件的方法列表
   */
  methods: {
    sendData(){
        console.log(666);

        this.triggerEvent('data',{username:'laoxie'});
    }
  },
  created(){
    console.log('created.properties=',this.properties)
  },
  ready(){
    console.log('ready.properties=',this.properties)
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log('page.show.properties=',this.properties)
    },
    hide: function () { },
  },
})
