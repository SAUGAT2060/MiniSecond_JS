//Importing the necessary packages
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import createProductRoute from './routes/createProduct.js'
// Initializing the instance for app 
const app = express()

//Initializing port for the url 
const port = 3000

//Loading the environmental variables form the env files 
dotenv.config()


const mongoURL = process.env.connectionString;

async function main (){
  try{
    await mongoose.connect(mongoURL);
    console.log("You are successfully connected to MongoDB!");

  }
  catch(err){
    console.log("Connection Failed!",err);
    process.exit(1);

  }
}

main();
app.use(express.json());
app.use('/api/product',createProductRoute);


app.listen(port,()=>{
  console.log(`Url:  http://localhost:${port}`);
 
  
  
})