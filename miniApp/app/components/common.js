module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
   username:'jingjing'
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){
      console.log('BehaviorMethod Test')
    }
  }
})