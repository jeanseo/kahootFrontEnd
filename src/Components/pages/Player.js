import React, {useContext, useEffect, useState} from "react";
import JoinPinGame from "../molecules/JoinPinGame";
import GameContext from "../Provider/GameContext";
import Container from "react-bootstrap/Container";
import {Badge, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import GameWaitingRoom from "../molecules/GameWaitingRoom";
import PlayGameStudent from "./PlayGameStudent";




const Player = (props) => {
    const {game, setGame} = useContext(GameContext);
    const [player, setPlayer] = useState({});
    const [startGame, setStartGame] = useState(false);

    //Affichage du déroulement des questions
    if(startGame){
        console.log('start Game');
        return(<div><PlayGameStudent/></div>)
    }

    //Affichage de l'attente de début de partie
    if(player.id&& game._id){
        console.log(player.id, game._id);

        return(
            <GameWaitingRoom player = {player} setStartGame={setStartGame}/>
        );
    }


//Affichage du formulaire d'inscription
    return(
        <div>
            <JoinPinGame pin={props.match.params.id} setPlayer={setPlayer} />
        </div>
        )

};

export default Player