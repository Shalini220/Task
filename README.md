# MERN Blog Platform

A full-stack blog application built with **MongoDB, Express.js, React.js, and Node.js**. This platform allows users to register, login, create blog posts, and view others' posts.

## 🌟 Features

- User Authentication (Login/Signup)
- Create, Read, Update, Delete (CRUD) blog posts
- Responsive UI using React
- MongoDB database integration
- RESTful APIs using Express.js
- JWT-based session management (planned)

## 🚀 Tech Stack

- **Frontend**: React.js, Axios, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT) (under development)

## 🛠️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Shalini220/Task.git
   cd MERN-Blog-main
Install dependencies : 
cd client
npm install
cd ../server
npm install
Set environment variables in .env:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the app:
# In one terminal
cd server
npm start

# In another terminal
cd client
npm start
