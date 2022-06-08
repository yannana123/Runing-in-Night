const express=require("express");
//调用数据池
const pool=require("../pool.js");
//建立路由器
const router=express.Router();


// 录入消费信息
router.post("/luru",(req,res,next)=>{
    var obj=req.body;
    console.log(obj); 
    // res.send("接口通顺")
    pool.query("insert into consumeInfo set?",[obj],(err,arr)=>{
        if(err){next(err);return}//if结束
        if(arr.affectedRows==1){
            res.send({code:1,msg:"信息录入成功"})
        }else{
            res.send({code:0,msg:"信息录入失败"})
        }//if结束

    })//pool结束
   


});//路由结束

// 修改消费信息
router.put("/xiugai",(req,res,next)=>{
    var obj=req.body;
    console.log(obj); 
    // res.send("接口通顺")
    pool.query("update consumeInfo set consumeName=? ,consumePrice=? ,consumeCount=? ,consumeType=?,consumeDate=?,remark=? where consumeId=?",[obj.consumeName,obj.consumePrice,obj.consumeCount,obj.consumeType,obj.consumeDate,obj.remark,obj.consumeId],(err,arr)=>{
        if(err){next(err);return}//if结束
        if(arr.affectedRows==1){
            res.send({code:1,msg:"信息修改成功"})
        }else{
            res.send({code:0,msg:"信息修改失败"})
        }//if结束

    })//pool结束
   


});//路由结束


module.exports=router;


