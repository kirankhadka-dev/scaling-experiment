// const express =require("express")
// const cluster =require("cluster")
// const os =require("os")

import express from "express"
import cluster from "cluster"
import os from "os"
import app from "./index.js"

const totalCpus=os.cpus().length



if(cluster.isPrimary){
    // primary : parent 
    console.log(`Number of CPUS is ${totalCpus}`)
    console.log(`Primary ${process.pid} is running`)



    
// fork the workers :


for (let i =0; i< totalCpus; i++){
    cluster.fork()
}

cluster.on("exit",(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} died `)
    console.log(`Let's fork another  worker !`)
})
}else{
    app.listen(3000,()=>{
        console.log(`App listening on port 3000`)
    })
}


