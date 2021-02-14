import './ProfileDropDown.css';
import { useContext } from "react";
import { UserContext } from "../../../utils/provider/UserProvider";
import { useHistory } from "react-router-dom";
import RoutingPath from '../../../routes/RoutingPath';

export const ProfileDropDown = () => {
    const history = useHistory();
    const [, setAuthUser] = useContext(UserContext);

    const logout = () => {
     setAuthUser(false);
     localStorage.removeItem('user');
     history.push(RoutingPath.HomeView)
}
    return (
        <div className="profileDropDown">
            <span>Profil</span>
            <span>Alternativ 2</span>
            <span onClick={() => history.push(RoutingPath.SettingsView)}>Inställningar</span>
            <span onClick = {() => logout()}>Logga ut</span>
        </div>
    )
}
