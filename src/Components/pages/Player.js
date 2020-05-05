import React, {useContext, useEffect, useState} from "react";
import JoinPinGame from "../molecules/JoinPinGame";
import GameContext from "../Provider/GameContext";
import Container from "react-bootstrap/Container";
import {Badge, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import GameWaitingRoom from "../molecules/GameWaitingRoom";




const Player = (props) => {
    const {game, setGame} = useContext(GameContext);
    const [player, setPlayer] = useState({});

    if(player.id&& game._id){
        console.log(player.id, game._id);



        return(
            <GameWaitingRoom player = {player}/>
        );
    }



    return(
        <div>
            <JoinPinGame pin={props.match.params.id} setPlayer={setPlayer}/>
        </div>
        )

};

export default Player