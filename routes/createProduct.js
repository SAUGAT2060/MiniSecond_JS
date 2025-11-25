import express from 'express'

import Product from '../models/Product.js'


const router = express.Router();


router.post('/',async(req,res)=>{

  try{

    const {
      food_id,
      name,
      category,
      description,
      date_of_manufactured,
      date_of_expiry,
      price
    } = req.body;


    if(!food_id ||
      !name ||
      !category ||
      !description ||
      !date_of_manufactured ||
      !date_of_expiry ||
      !price){
        return res.status(400).send("All fields are required!");
      }

    const newProduct = new Product({
       food_id,
      name,
      category,
      description,
      date_of_manufactured,
      date_of_expiry,
      price
    })

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);

  }
  catch(err){
    res.status(400).send(err.message)


  }
});


export default router;