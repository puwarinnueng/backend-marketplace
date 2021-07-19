var express = require('express');
var app = express();
var cors = require('cors');
const db = require('./libs/db');
const { json, urlencoded } = require('express');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/data', require('./routes/data')) 


app.get('/employee' , (req,res)=>{
   db.query("select * from employee" , (err,result)=>{
      if(err){
         res.send(err);
      }
      else{
         res.send(result);
      }
   })
});

app.post('/create',  (req,res) =>{
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

app.put('/update' ,(req,res) =>{
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

app.delete('/delete/:id' , (req,res)=>{
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

app.listen('4031' ,()=>{
   console.log('server fucker running port 4031')
})


