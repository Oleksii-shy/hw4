import axios from "axios";

let axiosInstanceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

let axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

let getUsers = () => axiosInstanceUsers();
let getUser = (id) => axiosInstanceUsers('/' + id);

let getPosts = () => axiosInstancePosts();
let getPost = (id) => axiosInstancePosts('/' + id);

let getComments = () => axiosInstanceComments();
let getComment = (id) => axiosInstanceComments('/' + id);

export {getUsers, getUser, getPosts, getPost, getComments, getComment}