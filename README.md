# 🟢 Mini-Project #2 – MEN CRUD Application
**Group 15**  

**Team Members:**  
- Saugat Rana  
- Kushal Gurung  

---

## About The Project
This project is a **MongoDB, Express, Node.js (MEN) application** that demonstrates how to **add new food products** to MongoDB Atlas.  
Users can submit product details through a **POST request** (using Postman) to store them in the database.  
The project includes validation for all fields and a professional schema using Mongoose.

---

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime environment  
- [Express.js](https://expressjs.com/) - Backend framework for routing and server handling  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database  
- [Mongoose](https://mongoosejs.com/) - ODM for MongoDB  
- [Postman](https://www.postman.com/) - API testing tool  

---

## Getting Started

### Prerequisites
Make sure you have **Node.js** and **npm** installed.  
MongoDB Atlas account with a cluster set up.

---
### Installation
1. Clone the repo  
```bash
git clone https://github.com/SAUGAT2060/MiniSecond_JS.git
```
2.Navigate into the project folder 
```bash
cd MiniSecond_JS
```
3.Install dependencies
```bash
npm install

```
4.Add your MongoDB connection string in .env
```bash
echo "connectionString=<your-mongo-connection-string>" > .env
```
---
Folder Structure
```bash 

MiniSecond/
├── models/
│   └── Product.js            # Mongoose schema for Food products
├── routes/
│   └── createEmployee.js     # POST route to create new product
├── .env                      # Contains MongoDB connection string
├── app.js                    # Express server setup and MongoDB connection
├── package.json              # Project dependencies
└── README.md                 # Project description
```
---
### Usage
### Start the server
```bash 
node app.js
```
### Or with Nodemon
``` bash
npx nodemon app.js
```
### Test the POST request using Postman
Send a POST request to:
``` bash
http://localhost:3000/api/employees
```
---
### License
This project is unlicensed for academic use.

### Contact
## Saugat Rana & Kushal Gurung
Project Link: https://github.com/SAUGAT2060/MiniSecond_JS