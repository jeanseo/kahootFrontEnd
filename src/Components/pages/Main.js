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
import TopNavBar from "../molecules/topNavBar";
import Quiz from "./Quiz";
import ListingQuizz from "./QuizList";
import QuizContextProvider from "../Provider/QuizContextProvider";


class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QuizContextProvider>
            <Router>
                    <TopNavBar></TopNavBar>
                <div>

                    <div className="content">

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/createquiz" component={CreateQuizForm}/>
                            <Route path="/profile" component={editProfile}/>
                            <Route path="/quiz/:id" component={Quiz}/>
                            <Route path="/listingquizz" component={ListingQuizz}/>
                        </Switch>

                    </div>
                </div>
            </Router>
            </QuizContextProvider>
        );
    }
}

export default Main;