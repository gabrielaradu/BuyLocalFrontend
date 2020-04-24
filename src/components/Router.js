import React from "react";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./NotFound";
import MainPage from "./dashboard/MainPage";
import AcceptOrder from "./vendors/AcceptOrder";
import DenyOrder from "./vendors/DenyOrder";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

const Router = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/pre-order/accept/:uuid" component={AcceptOrder}/>
                <Route exact path="/pre-order/deny/:uuid" component={DenyOrder}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default Router;