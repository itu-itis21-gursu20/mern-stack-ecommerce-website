import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzI1MTRkY2YyMzI3YWMxMGQ3MDc0NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTA0NjA4NjcsImV4cCI6MTY5MDcyMDA2N30.2gaYtZfZv24SYNoKZz6uIDQ8yJFMwE5-N0E_fBDNY70"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});