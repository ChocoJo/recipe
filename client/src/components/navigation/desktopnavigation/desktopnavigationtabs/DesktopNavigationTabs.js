import './DesktopNavigationTabs.css';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../../../routes/RoutingPath';


export const DesktopNavigationTabs = () => {
    const history = useHistory();
    return (
        <ul className="ulTabsWrapper">
            <li className="liTabs" onClick={() => history.push(RoutingPath.HomeView)}>Hem</li>
            <li className="liTabs" onClick = {() => history.push(RoutingPath.RecipeView)}>Recept</li>
            <li className="liTabs" onClick = {() => history.push(RoutingPath.FoodView)}>Mat</li>
            <li className="liTabs" onClick = {() => history.push(RoutingPath.DrinkView)}>Dryck</li>
        </ul>
    )
}
