import axios from 'axios';


const ToDoAPI = axios.create({
    baseURL: 'https://localhost:8000/projects', // base URL of the API
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default ToDoAPI;