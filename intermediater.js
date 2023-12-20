const express = require('express')
const app = express()

app.get('/login(.html)?',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
});

app.listen(9999,()=>{
    console.log('Server On 9999');
});