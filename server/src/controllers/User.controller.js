import { request } from 'http';
import UserModel from '../models/User.model.js';
import StatusCode from '../../configurations/StatusCode.js'

const createUser = async (request, response) => {
    const user = new UserModel({
        username: request.body.username,
        password: request.body.password,
        age: request.body.age
    });

    try {
        const databaseResponse = await user.save();
        response.status(StatusCode.CREATED).send(databaseResponse);
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: "Error while trying to create user",
            stack: error
        });
    }
}

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find();
        response.status(StatusCode.OK).send(databaseResponse);
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: error.message
        });
    }
}

const deleteUser = async (request, response) => {
    const userId = request.params.userId;
    try {
        const databaseResponse = await UserModel.findByIdAndDelete(userId);
        response.status(StatusCode.OK).send({ message: "Successfully deleted user", data: databaseResponse });
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: `Error while trying to delete user with id: ${userId}`, 
        error: error.message});
        
    }
}

const updateUser = async (request, response) => {
    const userId = request.params.userId;
    const data = {
        username: request.body.username,
        password: request.body.password
    }
    try {
        const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true });
        response.status(StatusCode.OK).send(databaseResponse);
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: `Error while trying to delete user with id: ${userId}`, 
        error: error.message});
    }
}

const queryUsername = async (request, response) => {
    const username = request.query.username;
    try {
        const databaseResponse = await UserModel.find({ username });
        response.status(StatusCode.OK).send(databaseResponse);
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error occured while trying to retrive user with username ${ username }`,
            error: error.message
        });
    }
}

const getUserById = async (request, response) => {
    try {
        const databaseResponse = await UserModel.findById({ _id: request.params.userId });
        response.status(StatusCode.OK).send(databaseResponse);
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to retrive user with the ID: ${ request.params.userId }`,
            error: error.message
        });

    }
}



export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    queryUsername,
    getUserById
}