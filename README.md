hiring@blaash.io## Playlist Management System

Blaash is a playlist management system that allows users to import playlists from YouTube, create new playlists, and interact with a modern front-end interface. Users can sign in with an OTP, view their playlists, and drag and drop them to customize their video library.

## Features

- **User Authentication:** OTP-based login for users.
- **YouTube Playlist Integration:** Import playlists from YouTube.
- **Drag-and-Drop Interface:** Easily organize and manage videos in playlists.
- **Responsive Design:** Works across multiple devices.

## Tech Stack

- **Frontend:**
  - React
  - React Router
  - Axios
  - React-Toastify (for notifications)
  - React-DND (for drag-and-drop)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - JWT (for authentication)
  - bcryptjs (for password encryption)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14.x or above)
- **MongoDB** (local or cloud instance)

## Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/thearavindh/playlist.git
cd blaash

mkdir backend && cd backend
npm init -y
npm install express mongoose nodemailer dotenv jsonwebtoken cors body-parser bcryptjs

npx create-react-app frontend
cd frontend
npm install react-router-dom axios react-toastify react-dnd

.env 
DB_URI=mongodb://localhost:27017/playlist
JWT_SECRET=your_jwt_secret
EMAIL=your_email@gmail.com
PASSWORD=your_email_password
