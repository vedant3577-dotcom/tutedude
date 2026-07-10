// Import express
const express = require("express");

// Create router
const router = express.Router();

// Import controller functions
const {

    getTasks,

    addTask,

    updateTask,

    deleteTask

} = require("../controllers/taskController");


// GET ALL TASKS


// URL : GET /tasks
router.get("/", getTasks);



// ADD NEW TASK


// URL : POST /tasks
router.post("/", addTask);



// UPDATE TASK


// URL : PUT /tasks/:id
router.put("/:id", updateTask);





// URL : DELETE /tasks/:id
router.delete("/:id", deleteTask);


// Export router
module.exports = router;