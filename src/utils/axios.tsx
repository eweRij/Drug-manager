import axios from "axios";

const { REACT_APP_API_PORT } = process.env;

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:${REACT_APP_API_PORT}`, //tu laczymy z tym portem n ktorym jest nasz  server
});

export default instance;
