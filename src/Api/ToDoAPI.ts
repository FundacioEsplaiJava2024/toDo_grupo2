import axios from 'axios';


const ToDoAPI = axios.create({
    baseURL: 'http://localhost:8000', // base URL of the API
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
    },
  });

export default ToDoAPI;