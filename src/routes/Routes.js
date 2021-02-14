import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { DrinkView } from "../views/navigationtabviews/drink/DrinkView";
import { FoodView } from "../views/navigationtabviews/food/FoodView";
import { RecipeView } from "../views/navigationtabviews/recipe/RecipeView";
import RoutingPath from './RoutingPath';
import { SigninView } from '../views/SigninView';
import { UserContext } from "../utils/provider/UserProvider";
import { useEffect, useContext } from "react";
import { SettingsView } from "../views/authenticatedview/SettingsView";

export const Routes = ({ children }) => {
    const [authUser, setAuthUser] = useContext(UserContext);

    const blockRouteIfAuthenticated = (allowedView, notAllowedView) => {
        return !authUser ? SigninView : HomeView
    }

    const authenticationRequried = (allowed, notAllowed) => {
        return authUser ? allowed : notAllowed;
    }

    useEffect(() => {
        if(localStorage.getItem('user')) {
            setAuthUser({username: localStorage.getItem('user')});
        }

    },[]);
   
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.HomeView} component={HomeView} />
                <Route exact path={RoutingPath.RecipeView} component={RecipeView} />
                <Route exact path={RoutingPath.FoodView} component={FoodView} />
                <Route exact path={RoutingPath.DrinkView} component={DrinkView} />
                <Route exact path={RoutingPath.SigninView} component= {blockRouteIfAuthenticated(SigninView, HomeView)} />
                <Route exact path={RoutingPath.SettingsView} component= {authenticationRequried(SettingsView, SigninView)}/>
            </Switch>
        </BrowserRouter>
    )
}
