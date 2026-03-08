# ChatApp - Real-Time Messaging Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) featuring WebSocket communication, Google OAuth authentication, and a modern UI.

## 🚀 Features

- **Real-Time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: 
  - Email/Password registration and login
  - Google OAuth integration
  - JWT-based session management
- **User Dashboard**: Profile management and settings
- **Modern UI**: Built with React, Tailwind CSS, and FlyonUI
- **Contact Management**: Quick navigation and contact bar for easy chatting
- **Secure**: Password hashing with bcrypt, protected routes
- **File Upload**: Profile pictures with Cloudinary integration
- **Email Notifications**: Nodemailer integration for user communications

## 📋 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Socket.IO Client** - WebSocket client
- **Tailwind CSS** - Utility-first CSS framework
- **FlyonUI** - UI component library
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Google Auth Library** - Google OAuth integration
- **Cloudinary** - Cloud image storage
- **Multer** - File upload middleware
- **Nodemailer** - Email sending
- **Morgan** - HTTP request logger
- **Cookie Parser** - Cookie parsing middleware

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- Google OAuth credentials (see [Google_Login_Guide.md](Google_Login_Guide.md))

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ChatAppFSD_4
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Client URL
CLIENT_URL=http://localhost:5173
```

### 3. Setup Frontend

```bash
cd client
npm install
```

Update the API configuration in [client/src/config/api.jsx](client/src/config/api.jsx) if needed:
```javascript
export const API_URL = 'http://localhost:5000';
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd server
npm run dev
```
Server will run on `http://localhost:4500`

### Start Frontend Development Server
```bash
cd client
npm run dev
```
Client will run on `http://localhost:5173`

## 📁 Project Structure

```
ChatAppFSD_4/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, fonts, etc.
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── chat/      # Chat-specific components
│   │   │       ├── ChatWindow.jsx
│   │   │       ├── ContactBar.jsx
│   │   │       └── QuickNavigation.jsx
│   │   ├── config/        # Configuration files
│   │   │   ├── api.jsx
│   │   │   ├── GoogleAuth.jsx
│   │   │   └── WebSocket.jsx
│   │   ├── context/       # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Chating.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   │   ├── db.js      # MongoDB connection
│   │   │   ├── authToken.js
│   │   │   └── websocket.js
│   │   ├── controllers/   # Request handlers
│   │   │   ├── authController.js
│   │   │   └── userController.js
│   │   ├── middleware/    # Custom middleware
│   │   │   ├── authMiddleware.js
│   │   │   └── googleMiddleware.js
│   │   ├── models/        # Database models
│   │   │   ├── userModel.js
│   │   │   └── messageModel.js
│   │   ├── routers/       # Route definitions
│   │   │   ├── authRouter.js
│   │   │   └── userRouter.js
│   │   └── utils/         # Utility functions
│   ├── index.js           # Server entry point
│   └── package.json
│
├── Google_Login_Guide.md  # Google OAuth setup guide
└── README.md              # This file
```

## 🔑 API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/google` - Google OAuth login
- `POST /auth/logout` - Logout user
- `GET /auth/verify` - Verify JWT token

### User Routes (`/user`)
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update user profile
- `GET /user/contacts` - Get user contacts
- `POST /user/upload` - Upload profile picture

## 🌐 WebSocket Events

### Client → Server
- `connection` - User connects to chat
- `join-room` - Join a chat room
- `send-message` - Send a message
- `typing` - User is typing
- `disconnect` - User disconnects

### Server → Client
- `message-received` - Receive new message
- `user-online` - User comes online
- `user-offline` - User goes offline
- `typing-indicator` - Show typing indicator

## 🔐 Environment Variables

### Backend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT | Yes |
| `JWT_EXPIRE` | JWT expiration time | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Optional |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Optional |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Optional |
| `EMAIL_HOST` | SMTP host | Optional |
| `EMAIL_PORT` | SMTP port | Optional |
| `EMAIL_USER` | Email username | Optional |
| `EMAIL_PASS` | Email password | Optional |
| `CLIENT_URL` | Frontend URL | Yes |

## 🧪 Testing

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## 📦 Building for Production

### Build Frontend
```bash
cd client
npm run build
```
The build output will be in the `client/dist` directory.

### Deploy Backend
```bash
cd server
# Use process managers like PM2
pm2 start index.js --name "chat-server"
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Prakriti**

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [FlyonUI](https://www.flyonui.com/) for UI components
- [MongoDB](https://www.mongodb.com/) for database
- [Google OAuth](https://developers.google.com/identity) for authentication

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

## 🚧 Roadmap

- [ ] Group chat functionality
- [ ] Voice and video calls
- [ ] File sharing in chat
- [ ] Message search
- [ ] Push notifications
- [ ] Dark mode
- [ ] Mobile app (React Native)
- [ ] Message encryption
- [ ] Read receipts
- [ ] Status updates

---

**Made with ❤️ using MERN Stack by Prakriti**
