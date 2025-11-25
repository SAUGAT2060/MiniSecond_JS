# MicroProject #2 - MEN CRUD Application
**Group 15**

**Team Members:**  
- Saugat Rana  
- Kushal Gurung  

---

## Project Overview
A **MongoDB, Express, Node.js** application demonstrating how to **add new food products** to MongoDB Atlas.  
Users can submit product details through a **POST request** (using Postman) to store them in the database.

---

## Folder Structure
MiniSecond/
├── models/
│ └── Product.js
├── routes/
│ └── createEmployee.js
├── .env
├── app.js
├── package.json
└── README.md


---

## API Usage
**POST /api/employees**  
**Body Example:**
```json
{
  "food_id": "F001",
  "name": "Apple",
  "category": "Fruit",
  "description": "Fresh apple",
  "date_of_manufactured": "2025-11-01",
  "date_of_expiry": "2025-11-30",
  "price": 2.5
}
Response: 201 Created with the saved product JSON.

Setup Instructions

Clone the repository:

git clone https://github.com/SAUGAT2060/MiniSecond_JS.git


Navigate into the project folder:

cd MiniSecond_JS


Install dependencies:

npm install


Create a .env file with your MongoDB connection string:

connectionString=YOUR_MONGODB_URI


Start the server:

npm start


Server will run at http://localhost:3000.

Thank You
