import React, { Component } from "react";
import {createGameRequest, getGameRequest} from "../../Requests";

const GameContext = React.createContext();

class GameProvider extends Component {

    state = {
        game: {}
    };

    // Method to update state
    setGame = game => {
        this.setState(prevState => ({ game : game }));

    };

    createGame = quizId => {

        return new Promise((resolve, reject) =>{
            const fetchedGame = createGameRequest(quizId);

            if(fetchedGame != null){
                this.setGame(fetchedGame);
                resolve(fetchedGame);
            }
            else
                reject('Error');
        })
    };

    loadGame = gameId => {
        return new Promise((resolve, reject) =>{
            const fetchedGame = getGameRequest(gameId);

            if(fetchedGame != null){
                this.setGame(fetchedGame);
                resolve(fetchedGame);
            }
            else
                reject('Error');
        })
    };

    render() {
        const { children } = this.props;
        const { game } = this.state;
        const { setGame } = this;
        const { createGame } = this;
        const { loadGame } = this;


        return (
            <GameContext.Provider
                value={{
                    game,
                    setGame,
                    createGame,
                    loadGame,
                }}
            >
                {children}
            </GameContext.Provider>
        )
    }
}

export default GameContext

export { GameProvider }