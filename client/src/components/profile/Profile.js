import { useContext } from 'react';
import { UserContext } from "../../utils/provider/UserProvider";
import profile from "../../utils/images/profile.svg";
import './Profile.css';
import { ProfileDropDown } from './profileDropDown/ProfileDropDown';

export const Profile = () => {
    const [authUser, ] = useContext(UserContext)
    return (
        <div className="profileWrapper">
            <img className="profilePicture" src={profile} alt={''}/><div className="userName">{authUser.username}</div>
            <ProfileDropDown/>
        </div>
    )
}