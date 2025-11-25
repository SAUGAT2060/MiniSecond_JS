import mongoose from 'mongoose';
const { Schema } = mongoose;

const FoodSchema = new Schema({
  food_id: {
    type: String,
    required: [true, "Food ID is required!"],
    unique: true
  },
  name: {
    type: String,
    required: [true, "Full Name of product is required!"],
    unique: true,
    minlength: [3, "Minimum character is 3"]
  },
  category: {
    type: String,
    required: [true, "Food Category is required!"],
    enum: ["Fruit","Vegetable","Meat","Dairy","Snack","Dessert","Bakery"]
  },
  description: {
    type: String,
    required: [true, "Description is required!"]
  },
  date_of_manufactured: {
    type: Date,
    required: [true, "Date of Manufacture is required!"]
  },
  date_of_expiry: {
    type: Date,
    required: [true, "Date of Expiry is required!"]
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"]
  }
});

const Product = mongoose.model('Product', FoodSchema);

export default Product;
