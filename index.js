
import express from "express"
import os from "os"

const app =express()

console.log(`Worker node  ${process.pid} started `)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/cpu",(req,res)=>{
    for(let i =0; i < 100000000000; i++){
        Math.random()
        res.send("Hello World")
    }
})


app.get("/host",(req,res)=>{
    res.send(os.hostname())
})




export default app;






