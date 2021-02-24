import './Sidebar.css';
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../../routes/RoutingPath";

export const Sidebar = ({drawerIsOpen, drawerHandler}) => {
    const history = useHistory();

    const handleRedirection = (selectedView) => {
        history.push(selectedView);
        drawerHandler(false);
    }
    return (
        <div className={drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <button className="closeButton" onClick={() => drawerHandler(false)}>X</button>

            <div className="sidebarWrapper">
                <ul className="ulSidebarWrapper">
                    <li className="liSidebar" onClick={() => handleRedirection(RoutingPath.HomeView)}>Hem</li>
                    <li className="liSidebar" onClick={() => handleRedirection(RoutingPath.RecipeView)}>Recept</li>
                    <li className="liSidebar" onClick={() => handleRedirection(RoutingPath.FoodView)}>Mat</li>
                    <li className="liSidebar" onClick={() => handleRedirection(RoutingPath.DrinkView)}>Dryck</li>
                </ul>
            </div>
        </div>
    )
}
