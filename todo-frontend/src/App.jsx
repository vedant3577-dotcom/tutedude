// Import CSS
import "./App.css";

// Import React Hooks
import { useEffect, useState } from "react";

// Import API
import API from "./services/api";

// Import Task Form
import TaskForm from "./components/TaskForm";

// Create App Component
function App() {

    // Store all tasks
    const [tasks, setTasks] = useState([]);

    // Store selected task for editing
    const [editTask, setEditTask] = useState(null);

    // Load all tasks
    const getTasks = async () => {

        try {

            // Get all tasks
            const response = await API.get("/tasks");

            // Save tasks
            setTasks(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    // Load tasks when page opens
    useEffect(() => {

        getTasks();

    }, []);

    // Delete Task
    const deleteTask = async (id) => {

        try {

            // Delete task
            await API.delete(`/tasks/${id}`);

            alert("Task Deleted Successfully");

            // Refresh task list
            getTasks();

        }

        catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    };

    return (

        <div className="container">

            <h1> To-Do List App</h1>

            {/* Add / Edit Form */}

            <TaskForm

                getTasks={getTasks}

                editTask={editTask}

                setEditTask={setEditTask}

            />

            <h2>My Tasks</h2>

            {

                tasks.length === 0

                ?

                <p>No Tasks Available</p>

                :

                tasks.map((task) => (

                    <div className="task" key={task._id}>

                        <h3>{task.title}</h3>

                        <p>{task.description}</p>

                        <p className="status">

                            Status : {task.status}

                        </p>

                        {/* Edit Button */}

                        <button

                            className="edit-btn"

                            onClick={() => setEditTask(task)}

                        >

                            Edit

                        </button>

                        {/* Delete Button */}

                        <button

                            className="delete-btn"

                            onClick={() => deleteTask(task._id)}

                        >

                            Delete

                        </button>

                    </div>

                ))

            }

        </div>

    );

}

// Export Component
export default App;