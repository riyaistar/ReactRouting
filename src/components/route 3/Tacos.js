import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RouteWithSubRoutes from './First'
import Cart from './Cart'
import Sandwiches from './Sandwich'
import Bus from './Bus'
const routes = [
    {
        path: "/tacos/bus",
        component: Bus
    },
    {
        path: "/tacos/cart",
        component: Cart
    }
];

function Tacos() {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}

export default Tacos
