const express = require('express');

const app = express();

// CORS跨越
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

app.get('/goods/kc',(req,res)=>{
    const {goods_id} = req.query;
    if(goods_id){
        res.send({
            code:200,
            data:5,
            msg:'success'
        })

    }else{
        res.send({
            code:400,
            data:[],
            msg:'fail'
        })
    }
});

app.listen(20011,()=>{
    console.log('server is runing')
})