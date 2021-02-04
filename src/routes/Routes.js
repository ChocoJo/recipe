import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { DrinkView } from "../views/DrinkView";
import { FoodView } from "../views/FoodView";
import { RecipeView } from "../views/RecipeView";
import RoutingPath from './RoutingPath';
import { SigninView } from '../views/SigninView';
import { UserContext } from "../utils/provider/UserProvider";
import { useEffect, useContext } from "react";

export const Routes = ({ children }) => {
    const [, setAuthUser] = useContext(UserContext);

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
                <Route exact path={RoutingPath.SigninView} component= {SigninView} />
            </Switch>
        </BrowserRouter>
    )
}
