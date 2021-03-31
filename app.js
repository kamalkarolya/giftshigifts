const express = require('express');
const app = express();
 const path = require('path');
 const react = require('react');
 const bodyParser = require("body-parser");
 var mongoose = require('mongoose');
const { Console } = require('console');
const port =   process.env.PORT || 3000;
app.get('/', (req, res)=>{
    res.send(" our project ")
    
});

app.listen(port, ()=>{
    console.log(`Server is Running at  http://localhost:${port}/`);
})

mongoose
.connect( 'mongodb://localhost:27017/myDatabase' , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(()=>{
    console.log(`CONNECTED TO THE DATABASE!!`);

}).catch((e)=>{
  console.log(`UNABLE TO CONNECT WITH DATABASE`);
})
