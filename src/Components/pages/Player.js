import React, {useContext, useState} from "react";
import JoinPinGame from "../molecules/JoinPinGame";
import GameContext from "../Provider/GameContext";
import Container from "react-bootstrap/Container";
import {Badge, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import GamePlayerWaitingRoom from "../atoms/GamePlayersWaitingList";

const Player = (props) => {
    const {game} = useContext(GameContext);
    const [player, setPlayer] = useState({});

    if(player.id&& game._id){
        console.log(game);
        return(
            <Container>
                <header>
                    <h3>Bienvenue {player.name}</h3>
                    <h2>{game.name}</h2>
                </header>
            <Row>
                <Col>
                    En attente de joueurs...
                </Col>
            </Row>
                <Row>
                    <Col>
                        {
                            game.players.map((player, index) => {
                                return (
                                    <Badge key={index}>
                                        {player.name}
                                    </Badge>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }



    return(
        <JoinPinGame pin={props.match.params.id} setPlayer={setPlayer}/>
    )

};

export default Player