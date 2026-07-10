// Import Task model
const Task = require("../models/Task");

// Get All Tasks

const getTasks = async (req, res) => {

    try {

        // Get all tasks from MongoDB
        const tasks = await Task.find();

        // Send tasks to frontend
        res.status(200).json(tasks);

    }

    catch (error) {

        // If any error occurs
        res.status(500).json({
            message: "Something went wrong"
        });

    }

};


// Add New Task


const addTask = async (req, res) => {

    try {

        // Get title and description from frontend
        const { title, description } = req.body;

        // Check if title is empty
        if (!title) {

            return res.status(400).json({
                message: "Title is required"
            });

        }

        // Create new task
        const newTask = new Task({

            title: title,

            description: description,

            status: "Pending"

        });

        // Save task in MongoDB
        await newTask.save();

        // Send success response
        res.status(201).json({

            message: "Task Added Successfully",

            newTask

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Something went wrong"

        });

    }

};





// Update Task


const updateTask = async (req, res) => {

    try {

        // Get task id from URL
        const id = req.params.id;

        // Update task
        const updatedTask = await Task.findByIdAndUpdate(

            id,

            req.body,

            {
                new: true
            }

        );

        // Check task exists
        if (!updatedTask) {

            return res.status(404).json({

                message: "Task Not Found"

            });

        }

        res.status(200).json({

            message: "Task Updated",

            updatedTask

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Something went wrong"

        });

    }

};





// Delete Task


const deleteTask = async (req, res) => {

    try {

        // Get id from URL
        const id = req.params.id;

        // Delete task
        const deletedTask = await Task.findByIdAndDelete(id);

        // Check task exists
        if (!deletedTask) {

            return res.status(404).json({

                message: "Task Not Found"

            });

        }

        res.status(200).json({

            message: "Task Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Something went wrong"

        });

    }

};




// Export all functions
module.exports = {

    getTasks,

    addTask,

    updateTask,

    deleteTask

};