import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import 'antd/dist/antd.css';

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Home/>}/>
                <Route path="/home" component={Home}/>
                <Route path="/beerlist" component={BeerList}/>
            </Switch>
        </Router>
    );
};

export default App;
