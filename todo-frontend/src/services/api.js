// Import axios
import axios from "axios";

// Create backend connection
const API = axios.create({

    // Render Backend URL
    baseURL: "https://todo-backend-igj1.onrender.com"

});

// Export API
export default API;