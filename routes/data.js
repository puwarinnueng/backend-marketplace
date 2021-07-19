const express = require('express');
const app = express();
const router = express.Router();
const db = require('../libs/db');

router.get('/employee' , (req,res)=>{
   db.query("select * from employee" , (err,result)=>{
      if(err){
         res.send(err);
      }
      else{
         res.send(result);
      }
   })
});

router.post('/create',  (req,res) =>{
   const name = req.body.name;
   const age = req.body.age;
   const position = req.body.position;
   const wage = req.body.wage;

   db.query('insert into employee (name,age,position,wage) values(?,?,?,?)',
   [name,age,position,wage], (err,results)=>{
      if(err){
         console.log(err);
      }
      else{
         res.send('เพิ่มข้อมูลเรียบร้อย')
      }
   }
   );
});

router.put('/update' ,(req,res) =>{
   const id = req.body.id;
   const wage = req.body.wage;
   db.query('update employee set wage = ? where id=?', [wage,id] ,(err,result)=>{
      if(err){
         console.log(err);
      }
      else{
         res.send(result);
      }
   })
})

router.delete('/delete/:id' , (req,res)=>{
   const id = req.params.id;
   db.query("delete from employee where id=?", id,  (err,result)=>{
       if(err){
          console.log(err);
       }
       else{
          res.send(result);
       }
   })
})



module.exports = router;
