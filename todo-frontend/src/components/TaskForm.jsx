// Import API
import API from "../services/api";

// Import Hooks
import { useState, useEffect } from "react";

// Create TaskForm Component
function TaskForm({ getTasks, editTask, setEditTask }) {

    // Store Title
    const [title, setTitle] = useState("");

    // Store Description
    const [description, setDescription] = useState("");

    // Fill input boxes when Edit button is clicked
    useEffect(() => {

        // Check if task is selected
        if (editTask) {

            setTitle(editTask.title);

            setDescription(editTask.description);

        }

    }, [editTask]);

    // Add or Update Task
    const handleSubmit = async () => {

        try {

            // If editing a task
            if (editTask) {

                // Call Update API
                await API.put(`/tasks/${editTask._id}`, {

                    title: title,

                    description: description,

                    status: editTask.status

                });

                alert("Task Updated Successfully");

                // Remove selected task
                setEditTask(null);

            }

            // Otherwise add a new task
            else {

                // Call Add API
                await API.post("/tasks", {

                    title: title,

                    description: description,

                    status: "Pending"

                });

                alert("Task Added Successfully");

            }

            // Refresh task list
            getTasks();

            // Clear input boxes
            setTitle("");

            setDescription("");

        }

        catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    };

    return (

        <div>

            <h2>

                {

                    editTask

                    ?

                    "Edit Task"

                    :

                    "Add New Task"

                }

            </h2>

            <label>Title</label>

            <input

                type="text"

                placeholder="Enter Title"

                value={title}

                onChange={(event) => {

                    setTitle(event.target.value);

                }}

            />

            <label>Description</label>

            <textarea

                placeholder="Enter Description"

                value={description}

                onChange={(event) => {

                    setDescription(event.target.value);

                }}

            ></textarea>

            {/* Add / Update Button */}

<button className="form-btn" onClick={handleSubmit}>

    {

        editTask

        ?

        "Update Task"

        :

        "Add Task"

    }

</button>

{/* Cancel Button */}

{

    editTask && (

        <button

            onClick={() => {

                // Remove selected task
                setEditTask(null);

                // Clear input boxes
                setTitle("");

                setDescription("");

            }}

            style={{ marginLeft: "10px", backgroundColor: "gray" }}

        >

            Cancel

            </button>

            )

            }

        </div>

    );

}

// Export Component
export default TaskForm;