import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import MainPage from "./dashboard/MainPage";

const Router = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>

)
export default Router;