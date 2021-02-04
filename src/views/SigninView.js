import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import  Routingpath  from "../routes/RoutingPath";
import { UserContext } from "../utils/provider/UserProvider";

export const SigninView = () => {
    const history = useHistory();

    const [loginCredentials, setLoginCredentials] = useState({
    username: '', password: '' });

    const [, setAuthUser] = useContext(UserContext);

    const handleChange = (event) => {
            setLoginCredentials({...loginCredentials, [event.target.id]: event.target.value });
    };

    const signIn = () => {
        localStorage.setItem('user', loginCredentials.username);
        setAuthUser(loginCredentials);
        history.push(Routingpath.HomeView);
    };
 
    return (
        <div>
            <h1>{loginCredentials.username}</h1>
            <form>
                <input id='username' placeholder="Username" onChange={event => handleChange(event)}/><br/>

                <input id='password' placeholder="Password" onChange={event => handleChange(event)}/>
                <button onClick={() => signIn()}>Logga in</button>
            </form>
            </div>
    )
}