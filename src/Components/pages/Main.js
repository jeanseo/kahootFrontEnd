import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import CreateQuizForm from "./createQuizForm";
import editProfile from "./editProfile";
import {Navbar} from "react-bootstrap";
import TopNavBar from "../molecules/topNavBar";
import ListingQuizz from "../atoms/listingQuizz";
import startGame from "./startGame";
import pinGame from "./pinGame";

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
                            <Route path="/listingquizz" component={ListingQuizz}/>
                            <Route path="/pingame" component={pinGame}/>  
                            <Route path="/startgame" component={startGame}/> 
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;