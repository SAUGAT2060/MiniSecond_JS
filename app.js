//Importing the necessary packages
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Initializing the instance for app 
const app = express()

//Initializing port for the url 
const port = 3000

//Loading the environmental variables form the env files 


app.get('/',(req,res)=>{
  res.send('Its working!')
})

app.listen(port,(req,res)=>{
  console.log(`Url:  http://localhost:${port}`);
  
})