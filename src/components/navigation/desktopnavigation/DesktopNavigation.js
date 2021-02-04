import "./DesktopNavigation.css";
import logotype from "../../../utils/images/logotype.svg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../utils/provider/UserProvider";
import { Profile } from "../../profile/Profile";

export const DesktopNavigation = () => {
    const history = useHistory();
    const [authUser, ] = useContext(UserContext);

    const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
        return authUser?.username
            ? <div className="profile"><Profile/></div>
            : <span className="signinButton" onClick = {() => history.push('./signin')}>Logga in</span>
    }

    return (
        <div className="desktopNavigationWrapper">
            <img className="navigationLogotype" src={logotype}
            alt={''}/>
            <span className="home" onClick={() => history.push('/')}>Hem</span>
            <span className="recipe" onClick = {() => history.push('/recipes')}>Recept</span>
            <span className="food" onClick = {() => history.push('/food')}>Mat</span>
            <span className="drinks" onClick = {() => history.push('/drinks')}>Dryck</span>
            {displaySignInButtonOrUsernameDependingOnAuthentication()}
        </div>

    );
}