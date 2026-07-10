# To-Do List App

Project Overview

A straightforward Full Stack To-Do List application crafted with React.js, Node.js, Express.js, and MongoDB. It offers users the ability to add, modify, remove, and view tasks. The frontend interacts with the backend via Axios, and all task data is securely stored in MongoDB.

---

Technologies Utilized

# Frontend

*   React.js

*   Axios

*   CSS

# Backend

*   Node.js

*   Express.js

*   MongoDB

*   Mongoose

---

Key Features

*   New task creation

*   Comprehensive task viewing

*   Modification of existing tasks

*   Task deletion

*   Task search API

*   Task status update API

---

Project Structure Breakdown

todo-backend

*   server.js: The main entry point for the backend.
*   routes/: Contains API route definitions.
*   controllers/: Handles the logic for API requests.
*   models/: Defines the Mongoose schema for tasks.
*   config/: For configuration settings, such as database connections.

todo-frontend

*   src/: Root directory for React source code.
*   components/: Reusable UI components.
*   services/: For API interaction logic.

---

Project Workflow

1.  User Input: The user enters the task title and description into the frontend.
2.  Frontend Request: React uses Axios to send the task data to the backend server.

3.  Backend Processing: Express.js receives the request.

4.  Database Storage: The task is saved to MongoDB via Mongoose.

5.  Backend Response: The server sends a confirmation message back to the frontend.
6.  UI Refresh: React automatically updates the task list display, reflecting the changes.

7.  Ongoing Management: Users can continuously edit or delete tasks as needed.

---

API Endpoints

*   GET /tasks: Fetches all tasks from the database.
*   POST /tasks: Adds a new task.
*   PUT /tasks/:id: Updates an existing task identified by its ID.
*   DELETE /tasks/:id: Removes a task by its ID.
*   GET /tasks/search: Searches for tasks based on their title.
*   PATCH /tasks/status/:id: Updates the status of a task by its ID.

---

Setup and Running the Project

# Backend

1.  Navigate to the todo-backend directory in your terminal.

``bash

cd todo-backend

`

2.  Install backend dependencies.

`bash

npm install

`

3.  Start the backend server.

`bash

npm run dev

`

# Frontend

1.  Open a new terminal window.

2.  Navigate to the todo-frontend directory.

`bash

cd todo-frontend

`

3.  Install frontend dependencies.

`bash

npm install

`

4.  Start the React development server.

`bash

npm run dev

`

---

Environment Configuration

Ensure you create a .env file in the todo-backend directory to store sensitive information.

Example .env file:

`env

MONGO_URI=Your MongoDB Connection String

PORT=5000

`

---

Challenges Encountered & Solutions

*   React-Node.js Integration: Challenges were overcome by establishing consistent API endpoints and using Axios for reliable client-server communication.
*   MongoDB Atlas Connection: Setting up the connection to MongoDB Atlas was achieved through careful configuration of the connection string in the .env file.
*   Axios Request Handling: Handling various HTTP requests (GET, POST, PUT, DELETE) with Axios required understanding its API and implementing appropriate error handling.
*   Data Refreshing: Ensuring the UI updated immediately after adding, modifying, or deleting tasks was effectively handled using React's state management capabilities, particularly with hooks like useState and useEffect`.

---

Conclusion

This project successfully demonstrates a full-stack application featuring CRUD (Create, Read, Update, Delete) operations. By leveraging React.js, Node.js, Express.js, and MongoDB, we've built a user-friendly interface for efficient task management.