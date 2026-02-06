# 🏡 Airbnb Clone – Full Stack Project

A full-stack Airbnb-style web application built to understand and implement real-world web development concepts using **Node.js, Express, MongoDB Atlas, and EJS**.

This project focuses on authentication, CRUD operations, reviews, maps integration, image uploads, and responsive UI — following the **MVC architecture**.


---


## 🚀 Live Demo
👉 https://airbnb-clone-production-e2fd.up.railway.app/


---


## 📌 Features

- 🔐 User Authentication (Sign up / Login / Logout)
- 🏠 Create, Edit & Delete Listings
- 🖼️ Image Upload with Cloudinary
- 📍 Location-based Listings using OpenStreetMap (Nominatim)
- ⭐ Review & Rating System
- 🧾 GST Price Calculation
- ⏳ Loader for form submissions
- 📱 Fully Responsive UI (Bootstrap)
- 🛡️ Server-side Validation & Error Handling
- 🧩 MVC Architecture


---


## 🛠️ Tech Stack

### Frontend
- EJS
- Bootstrap 5
- Font Awesome
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js (Authentication)

### Other Tools & Services
- Cloudinary (Image storage)
- Multer (File upload)
- OpenStreetMap (Geocoding)
- Day.js (Time formatting)


---


## 📂 Project Structure

AIRBNB/
│
├─ controllers/
│ ├─ listing.js
│ ├─ review.js
│ └─ user.js
│
├─ init/
│ ├─ data.js
│ └─ init.js
│
├─ models/
│ ├─ listing.js
│ ├─ review.js
│ └─ user.js
│
├─ node_modules/
│
├─ public/
│ ├─ css/
│ └─ js/
│
├─ routes/
│ ├─ listing.js
│ ├─ review.js
│ └─ user.js
│
├─ utils/
│
├─ views/
│ ├─ includes/
│ ├─ layouts/
│ ├─ listings/
│ └─ users/
│
├─ .env
├─ .gitignore
├─ cloudConfig.js
├─ image.png
├─ middleware.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ schema.js
└─ server.js


---


## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

MONGO_URI=your_mongodb_atlas_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SESSION_SECRET=your_session_secret


⚠️ **Do not push `.env` to GitHub**


---


## 🧪 Running Locally

# Clone the repo
git clone https://github.com/the-hvr/airbnb-clone.git

# Move into the project
cd airbnb-clone

# Install dependencies
npm install

# Start the server
npm start


---


##  🗄️ Database Initialization (Optional)

node init/init.js


---


##  🧠 Key Learnings

- Implementing MVC architecture

- Handling authentication & authorization

- Integrating third-party services (Cloudinary, Maps)

- Managing async operations & loaders

- Using MongoDB Atlas with environment variables

- Deploying full-stack applications


---


## 📌 Future Improvements

- Booking & payment integration

- Wishlist functionality

- Admin dashboard

- Better caching for map APIs


---


##  📸 Screenshots
![alt text]({FCB3F660-65F4-45E4-853D-4B0E6040FC47}.png)
![alt text](image.png)
![alt text]({CC534A73-DC17-49FD-819F-415B618CABC7}.png)


---


## 👤 Author

Harshvardhan Raj
Web Developer


---


## 📄 License

This project is for learning and portfolio purposes only.
Inspired by Airbnb — not affiliated with Airbnb.
