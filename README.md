# Airbnb Clone (Wanderlust)

An Airbnb-inspired full-stack web application built using **Node.js, Express, MongoDB, and EJS**.  
This project follows the **MVC architecture** and demonstrates CRUD operations, RESTful routing, and server-side rendering.

> ⚠️ This project is currently under development and is intended for learning and portfolio purposes.

---

## 🚀 Features

- View all property listings
- Create new listings
- Edit existing listings
- Delete listings
- Server-side rendering using EJS
- Reusable layout and partial templates
- Responsive UI with Bootstrap
- MVC-based folder structure

---

## 🛠️ Tech Stack

### Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Font Awesome

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📁 Project Folder Structure

AIRBNB/
├── init/
│ ├── data.js
│ └── init.js
│
├── models/
│ └── listing.js
│
├── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── app.js
│
├── views/
│ ├── includes/
│ │ ├── navbar.ejs
│ │ ├── footer.ejs
│ │ └── starter.ejs
│ │
│ ├── layouts/
│ │ └── boilerplate.ejs
│ │
│ ├── listings/
│ │ ├── index.ejs
│ │ ├── show.ejs
│ │ ├── new.ejs
│ │ └── edit.ejs
│
├── index.js
├── package.json
└── package-lock.json


---

## 🧱 MVC Architecture

- **Model** → `models/listing.js`  
  Handles MongoDB schema and database operations.

- **View** → `views/`  
  Handles UI using EJS templates.

- **Controller** → `index.js`  
  Handles routing, business logic, and interaction between Model and View.

---

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/the-hvr/airbnb.git

2. Install dependencies
npm install

3. Start MongoDB (local or Atlas)
mongosh (local)

4. Run the application
node index.js

5. Open browser
http://localhost:8080/listings


## 📌 Learning Outcomes

Practical use of MongoDB schemas

Understanding MVC architecture

Implementing RESTful APIs

Server-side rendering with EJS



## 🔮 Future Improvements

User authentication

Image upload via Cloudinary

Reviews & ratings

Booking functionality

Map integration


## 👤 Author

Harshvardhan Raj
Web Developer
