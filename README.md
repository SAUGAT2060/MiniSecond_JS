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
Send product details in the body as JSON.  

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
Response:
201 Created with the saved product data in JSON format.

Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/SAUGAT2060/MiniSecond_JS.git
Navigate into the project folder:

bash
Copy code
cd MiniSecond_JS
Install dependencies:

bash
Copy code
npm install
Create a .env file with your MongoDB connection string:

ini
Copy code
connectionString=YOUR_MONGODB_URI
Start the server:

bash
Copy code
npm start
The server will run at http://localhost:3000.

