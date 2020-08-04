// 云函数入口文件
const cloud = require('wx-server-sdk')

// 初始化
cloud.init({
   // DYNAMIC_CURRENT_ENV 指云函数当前所在的环境
   env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

const user = db.collection('user');


// 云函数入口函数
exports.main = async (event, context) => {
  // 如何判断操作类型（增、删、改、查）
  switch(event.type){
    case 'get':
      return get();
    case 'delete':
      return remove(event.id);
    case 'add':
      return add(event.data);
  }
  
}

async function add(data){
  await user.add({data})
}
async function get(){
  return await user.get();
}
async function remove(id){
  await user.doc(id).remove();
}