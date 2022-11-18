import axios from 'axios';
export const getUsersRequest= async()=> axios.get('/user');
export const createUserRequest= async ()=> axios.post('/register');