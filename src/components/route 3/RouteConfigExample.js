import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RouteWithSubRoutes from './First'
import Sandwiches from './Sandwich'
import Tacos from './Tacos'
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
    }
];
function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

export default RouteConfigExample
