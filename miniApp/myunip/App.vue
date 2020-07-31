<script>
	// 相当于小程序中的app.js
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide');
			
		},
		
		globalData:{
			
		}
	}
</script>

<style>
	/*每个页面公共css：等效于小程序中的app.wxss */
	.container{padding:15px;}
</style>
