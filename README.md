🟢 Mini-Project #2 – MEN CRUD Application  
📝 Project Overview  
This project is a simple **MongoDB, Express, Node.js** application that demonstrates how to **add new food products** to MongoDB Atlas.  
Users can submit product details through a **POST request** (using Postman) to store them in the database.

📂 Folder Structure  
MiniSecond/  
├── models/  
│   └── Product.js # Mongoose schema for Food products  
├── routes/  
│   └── createEmployee.js # POST route to create new product  
├── .env # Contains MongoDB connection string  
├── app.js # Express server setup and MongoDB connection  
├── package.json # Project dependencies  
└── README.md # Project description (this file)

✨ Features  
Backend (Node.js + Express + Mongoose)  
- Connects to MongoDB Atlas using Mongoose  
- Defines a **Product schema** with validation  
- Implements a **POST endpoint** to create new products  

Frontend / Testing  
- Uses **Postman** to send POST requests with product details  
- Returns success response with newly created product  
- Validates all fields before saving  

🚀 How to Run the Project  
Install dependencies:  
```bash
npm install express mongoose dotenv
npm install nodemon --save-dev
Start the server:

bash
Copy code
node app.js
Or with Nodemon:

bash
Copy code
npx nodemon app.js
Open Postman and send POST request to:

bash
Copy code
http://localhost:3000/api/employees
👥 Group Members

Saugat Rana

Kushal Gurung

🔗 GitHub Repository
https://github.com/SAUGAT2060/MiniSecond_JS
