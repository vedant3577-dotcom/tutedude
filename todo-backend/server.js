// Import express
const express = require("express");

// Import cors
const cors = require("cors");

// Import dotenv
const dotenv = require("dotenv");

// Import database connection
const connectDB = require("./config/db");

// Import task routes
const taskRoutes = require("./routes/taskRoutes");

// Read .env file
dotenv.config();

// Connect MongoDB
connectDB();

// Create express app
const app = express();

// Allow frontend to connect
app.use(cors());

// Read JSON data
app.use(express.json());

// Use task routes

// Every route will start with /tasks
app.use("/tasks", taskRoutes);

// Port number
const PORT = process.env.PORT || 5000;

// Home Route

app.get("/", (req, res) => {

    res.send("Welcome to To-Do API");

});

// Start server
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});