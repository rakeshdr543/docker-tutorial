const express=require('express')

const app=express()

let count = 0;

app.get('/',(req,res)=> {
    count++
    res.send(`this page has been visited ${count} times`)
})

app.listen(5000,()=>console.log('server up on 5000'))

