import React, {Component, useContext, useState} from "react";
import QuizContext from "../Provider/QuizContext";
import GameContext from "../Provider/GameContext";
import {getGameRequest, getQuiz} from "../../Requests";
import Quiz from "./Quiz";
import PinGame from "./PinGame";

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        const setLoading = (value) => {this.setState({loading: value})};
    }

    componentDidMount() {

        getGameRequest(this.props.match.params.id)
            .then((fetchedGame)=>{
                this.context.setGame(fetchedGame);
                this.setState({loading: false});
                console.log(fetchedGame)
            });




    }


    render(){
        if(this.state.loading)
            return(<div>loading</div>);


        if(this.context.game.status === "pending"){
            return(
                <div>
                    <PinGame/>
                </div>)
        }


        return(
            <div></div>
        )
    }


}
Game.contextType = GameContext;
export default Game