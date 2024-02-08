const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./db')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/',(req,res)=>{
    res.send('root page')
})
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/login',(req,res)=>{
    // const {user,pass} =req.body.
    const {username, pass} = req.body
    db.query('select * from users where (email = ? or phone =?) and pass =?',[username,username,pass],(err,results)=>{
       if(!err) {res.send(results)
    console.log(results)
    }
       else {res.send(err)
    
    console.log(err)
    }
    } )
})


app.post('/signup',(req,res)=>{
    // const {user,pass} =req.body.
    const {username, pass} = req.body
    db.query('insert into users (fullname,fathername,email,phone,pass) values(?,?,?,?,?)',Object.values(req.body),(err,results)=>{
       if(!err) {res.send(results)
    console.log(results)
    }
       else res.send(err)
    } )
})
app.post('/todo',(req,res)=>{
    // const {user,pass} =req.body.
    const {username, pass} = req.body
    db.query('insert into todos (todotext,userid) values(?,?)',Object.values(req.body),(err,results)=>{
       if(!err) {res.send(results)
    console.log(results)
    }
       else {res.send(err)
    
    console.log(err)
    }
    } )
})

app.get('/todo',(req,res)=>{
    const {userid} =req.query
    console.log(userid,'useriddddddddddddd')

    // const {username, pass} = req.body
    db.query('select * from todos where userid =?',userid,(err,results)=>{
       if(!err) {res.send(results)
    console.log(userid)
    }
       else {res.send(err)
    
    console.log(err)
    }
    } )
})



module.exports = app;