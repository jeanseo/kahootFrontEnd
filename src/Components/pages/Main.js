import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import CreateQuizForm from "../molecules/createQuizForm";
import editProfile from "./editProfile";
import {Navbar} from "react-bootstrap";
import TopNavBar from "../molecules/topNavBar";


class Main extends Component {
    render() {
        return (
            <Router>
                    <TopNavBar></TopNavBar>
                <div>

                    <div className="content">

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/createquiz" component={CreateQuizForm}/>
                            <Route path="/profile" component={editProfile}/>
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;