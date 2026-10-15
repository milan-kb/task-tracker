# Task Tracker

A simple MERN stack task management application built for a workshop. It lets users add tasks with a title and optional details, and displays them in a clean, minimal interface.

## Overview

This project is split into two main parts:

- Frontend: React + Vite client app
- Backend: Express + MongoDB API

The app demonstrates a basic full-stack flow: the client sends requests to the backend, the backend stores tasks in MongoDB, and the frontend fetches and renders them.

## Features

- Add a new task with a title and optional description
- View all saved tasks in a list
- Keep tasks sorted by newest first
- Simple and responsive UI built with React
- Express API connected to MongoDB
- Environment-based configuration for app settings

## Tech Stack

### Frontend
- React
- Vite
- JavaScript

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS and dotenv

## Project Structure

```text
task-tracker/
├── client/
│   ├── src/
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── server/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

## Backend API

The server exposes the following routes:

- GET /api/tasks - Fetch all tasks
- POST /api/tasks - Create a new task

### Task Model

Each task contains:

- title: required string
- description: optional string
- createdAt: automatically added by MongoDB timestamps
- updatedAt: automatically added by MongoDB timestamps

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB Atlas connection string or a local MongoDB instance

## Environment Setup

### Server

Create a `.env` file in the `server` folder based on `.env.example`:

```env
PORT=5000
MONGODB_URI=<your-atlas-connection-string-with-database-name>
CLIENT_ORIGIN=http://localhost:5173
```

### Client

Create a `.env` file in the `client` folder based on `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/milan-kb/task-tracker.git
cd task-tracker
```

### 2. Install dependencies for the frontend

```bash
cd client
npm install
```

### 3. Install dependencies for the backend

```bash
cd ../server
npm install
```

## Running the App

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will typically run on:

- http://localhost:5173

The backend API will run on:

- http://localhost:5000

## Example Workflow

1. Start MongoDB and ensure the connection string is valid.
2. Launch the backend server.
3. Launch the frontend client.
4. Open the app in the browser.
5. Add a task using the form.
6. The task is saved to MongoDB and appears in the list.

## Notes

This repository is designed as a workshop project and is intentionally simple. It is a good starting point for learning how to connect:

- React frontend to a Node/Express backend
- Express routes to MongoDB models
- Environment variables in full-stack JavaScript app setup

## License

This project is currently unlicensed unless otherwise specified.

## Author

Built as part of an ICT MERN Stack workshop project.
