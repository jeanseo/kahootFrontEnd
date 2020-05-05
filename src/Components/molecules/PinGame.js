import React, {Component, useContext} from "react";
import {Button, Row, Col, Table } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./PinGame.css";
import GameContext from "../Provider/GameContext";
import QuizItem from "./QuizItem";
import GamePlayerWaitingList from "../atoms/GamePlayersWaitingList";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
const socket = socketIOClient(`${ENDPOINT}/games`);

function subscribeToIncomingPlayer(cb) {
    socket.on('newplayer', player => {
        console.log('newplayer');
        cb(null, player)});
}


const PinGame = (props) => {

    const {game, setGame} = useContext(GameContext);

    socket.emit('manageGame', {game: game._id});

    subscribeToIncomingPlayer((err, incomingPlayer) => {
        console.log('on recupere un nvx joueur: '+ incomingPlayer.name);
        if(game.players){
            console.log(`on l'ajoute à la liste qui contient ${game.players.length} noms`);
            console.log(incomingPlayer);
            let newList = game.players;
            newList.push(incomingPlayer);
            setGame({...game, players : newList});
        }
    });


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
                            return <GamePlayerWaitingList key={index}
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