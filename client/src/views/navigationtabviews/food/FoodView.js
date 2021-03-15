import BackendAPIService from '../../../utils/api/service/BackendAPIService';
import { useState, useEffect } from 'react';


export const FoodView = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState({
        username: 'Username1',
        password: 'Password1'
    });

    const create = async () => {
        try {
            setLoading(true);
            await BackendAPIService.createUser(newUser);
            setLoading(false);
        } catch(error) {
            console.log(error);
        }
    }

    const fetchData = async () => {
        const response = await BackendAPIService.getAllUsers();
        setUsers(response.data);

    }

    useEffect(() => {
        fetchData() 
    },[loading]);



    return (
        <div>
            <h1> BACKEND API:</h1>
            <p>USERNAME:</p><input onChange={(event) => setNewUser({ ...newUser, username: event.target.value })}/><br/>
            <p>PASSWORD:</p><input/><br/>
            <p>AGE:</p><input/><br/>
            <button onClick={() => create()}>Create user</button>
            <hr/>
            <h1>Display all users: </h1>
            {users.map((x) => 
            <div>
                <span>{x.username}</span>
            </div>)}
        </div>
            
    );
}