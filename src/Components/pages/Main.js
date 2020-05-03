import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import CreateQuizForm from "../molecules/createQuizForm";
import editProfile from "./editProfile";
import TopNavBar from "../molecules/topNavBar";
import Quiz from "./Quiz";
import ListingQuizz from "../atoms/listingQuizz";
import startGame from "./startGameTeacher";
import pinGame from "./pinGame";
import startGameUser from "./startGameUser";
import correctAnswer from "./correctAnswer";
import falseAnswer from "./falseAnswer";
import joinPinGame from "./joinPinGame";
import top5Players from "./top5Players";

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
                            <Route path="/startgameteacher" component={startGame}/> 
                            <Route path="/startgameuser" component={startGameUser}/>
                            <Route path="/q1correctanswer" component={correctAnswer}/>
                            <Route path="/q1falseanswer" component={falseAnswer}/>
                            <Route path="/quiz/:id" component={Quiz}/>
                            <Route path="/listingquizz" component={ListingQuizz}/>
                            <Route path="/joinpingame" component={joinPinGame}/>
                            <Route path="/top5players" component={top5Players}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;