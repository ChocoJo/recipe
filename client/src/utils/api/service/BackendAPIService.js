import http from "../BackendAPI";

const createUser = (data) => {
    return http.post('/user', data);
}

const getAllUsers = () => {
    return http.get('user');
}

export default {
    createUser,
    getAllUsers
}