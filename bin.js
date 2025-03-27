// const express =require("express")
// const cluster =require("cluster")
// const os =require("os")

import express from "express"
import cluster from "cluster"
import os from "os"
import app from "./index.js"




if(cluster.isPrimary){

    console.log("Master node started ")
    console.log(`processs id is ${process.pid}`)
   
cluster.on("exit",(worker,code,signal)=>{
    console.log(`Worker ${worker.process.pid} died `)
    console.log(`Let's fork another  worker !`)
})

}else{
    app.listen(3000,()=>{
        console.log(`App listening on port 3000`)
    })
}


