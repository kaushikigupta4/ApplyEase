# ApplyEase - Job Portal App with MERN Stack
A comprehensive job portal application built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**.  
This application allows users to browse job listings, apply for jobs, and manage their applications seamlessly.

---

## Features
- **User Authentication:** Secure login for job seekers and employers using JWT (JSON Web Tokens).  
- **Job Listings:** Browse a wide range of job listings fetched from MongoDB.  
- **Application Management:** Job seekers can manage their applications; employers can view and manage received applications.  
- **Responsive Design:** Works seamlessly across desktops, tablets, and mobile devices.

---

## Technologies Used
- **Frontend:** React.js, React Router, Bootstrap  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** JWT, Bcrypt (for password hashing)  
- **Image Upload:** Cloudinary for storing and managing images  
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

---

## Getting Started

### Prerequisites
- Node.js v22.2.0 or above  
- MongoDB Atlas account (or local MongoDB server)  
- Cloudinary account for image storage  

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/kaushikigupta4/ApplyEase.git
   
#### Install NPM packages
##### Backend
 cd backend
 npm install

##### Frontend
- cd ../frontend
- npm install

##### Set up environment variables
Create a `config.env` file inside `backend/config` with the following:

```env
PORT=
API_KEY=
API_SECRET=
CLOUD_NAME=
DB_URL=
JWT_SECRET_KEY=
JWT_EXPIRE=
COOKIE_EXPIRE=


##### Run the backend
cd backend
node server.js

##### Run the frontend
cd frontend
npm run dev

##### Open the app
-Navigate to http://localhost:5173
 in your browser.

## Contributing
Contributions make the open-source community amazing.  

- Fork the repository, make improvements, and create a pull request.  
- If you like the project, please **give it a ⭐** on GitHub!  

## Contact
**Kaushiki Gupta**  

- GitHub: [https://github.com/kaushikigupta4](https://github.com/kaushikigupta4)  
- Live Project: [https://applyease-9oip.onrender.com/](https://applyease-9oip.onrender.com/)


