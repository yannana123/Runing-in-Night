const express=require("express");
//调用数据池
const pool=require("../pool.js");
//建立路由器
const router=express.Router();

//管理员登录
router.post("/login",(req,res,next)=>{
    var obj=req.body
    console.log(obj.uname,obj.upwd)
    pool.query("select * from admin where uname=? && upwd=?",[obj.uname,obj.upwd],(err,arr)=>{
        if(err){next(err);return}//if结束
        if(arr.length>=1){
            res.send({code:1,msg:"欢迎登录"})
        }else{res.send({code:0,msg:"用户名或密码错误"})}//if返回数据结束
    })

})//路由结束





//查询数据库
router.get("/search",(req,res,next)=>{
        // res.send("验证接口通顺")
    pool.query("select * from consumeInfo",(err,arr)=>{
        if(err){next(err);return}//if结束
        if(arr.length>=1){
            res.send({code:1,msg:arr})
        }//if返回数据结束

    })//pool结束
   
});//路由结束


//删除数据
router.delete("/del/:consumeId",(req,res,next)=>{
    // res.send("验证接口通顺")
     var obj=req.params;
        console.log(obj.consumeId);
        pool.query("delete from consumeInfo where consumeId=?",[obj.consumeId],(err,arr)=>{
            if(err){next(err);return}//if判断错误结束
            if(arr.affectedRows==1){
                res.send({code:1,msg:"删除成功"})
            }else{
                res.send({code:0,msg:"删除失败"})
            } //if删除判断结束
        });//pool结束



})//路由结束



module.exports=router;