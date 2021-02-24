import "./DesktopNavigation.css";
import logotype from "../../../utils/images/logotype.svg";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../utils/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import { DesktopNavigationTabs } from "./desktopnavigationtabs/DesktopNavigationTabs";

export const DesktopNavigation = () => {
    const history = useHistory();
    const [authUser, ] = useContext(UserContext);

    const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
        return authUser?.username
            ? <div className="profile"><Profile/></div>
            : <span className="signinButton" onClick = {() => history.push('/signin')}>Logga in</span>
    }

    return (
        <div className="desktopNavigationWrapper">
            <img className="navigationLogotype" src={logotype}
            alt={''}/>
            <div className="desktopNavigationTabs">
                <DesktopNavigationTabs/>
            </div>
            {displaySignInButtonOrUsernameDependingOnAuthentication()}
        </div>

    );
}