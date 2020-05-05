import React, {Component, useContext} from "react";
import {Button, Row, Col, Table } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./PinGame.css";
import GameContext from "../Provider/GameContext";
import QuizItem from "./QuizItem";
import GamePlayerWaitingRoom from "../atoms/GamePlayersWaitingList";
   
const PinGame = (props) => {

    const {game, setGame} = useContext(GameContext);


        return (<div>
            <div className="all">
                <div className="quizzname">
                        {game.quiz.name}
                </div>
                <div className="pinnumber">
                        <p className="pintext">
                            Code pin : {game.pin}
                        </p>
                </div>
                <div className="pin">
                    <h2>
                          Joueurs
                    </h2>
                    {
                        game.players.map((player, index) => {
                            return <GamePlayerWaitingRoom key={index}
                                             player={player}
                            />
                        })
                    }
            </div>
            <div className="start" >
                    <Button disabled={game.players.length === 0} color="success"
                    onClick={()=>
                        alert('demarrer le jeu')
                        //Faire le call api pour démarrer une partie
                    }>
                        START
                    </Button>
            </div>    
        </div>
            </div>
        );

}

export default PinGame;