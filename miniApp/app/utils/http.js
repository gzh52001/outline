const baseUrl = 'https://api.qfh5.cn';
function request(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseUrl+url,
      data,
      success(res){
        resolve(res.data);
      },
      fail(){
        reject()
      }
    })

  })
}

module.exports = {
  baseUrl:baseUrl,
  request,
}

// exports.baseUrl = baseUrl;