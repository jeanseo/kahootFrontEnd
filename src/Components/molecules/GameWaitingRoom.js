import React, {Component, useContext, useState} from "react";
import GameContext from "../Provider/GameContext";

import socketIOClient from "socket.io-client";
import {Badge, Row, Spinner} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ENDPOINT = "http://localhost:8080";
const socket = socketIOClient(`${ENDPOINT}/games`);

function subscribeToMessage(cb) {
    socket.on('message', message => {
        cb(null, message)});
}

function subscribeToStartGame(cb) {
    socket.on('gameStarted', game => {
        cb(null, game)});
}

function subscribeToIncomingPlayer(cb) {
    socket.on('newplayer', player => {
        cb(null, player)});
}

class GameWaitingRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : '',

        };
        subscribeToMessage((err, message) => {
            this.setState({message : message});
        });


    }

    componentDidMount() {
        console.log(this.context);
        //On indique qu'on a rejoint la partie
        socket.emit('subscribeToGame', {
            player: {id : this.props.player.id, name: this.props.player.name},
            game:this.context.game._id});
        //On s'abonne aux nouveaux arrivants
        subscribeToIncomingPlayer((err, incomingPlayer) => {
            console.log('on recupere un nvx joueur: '+ incomingPlayer.name);
            if(this.context.game.players && incomingPlayer.id !== this.props.player.id){
                console.log(`on l'ajoute à la liste qui contient ${this.context.game.players.length} noms`);
                console.log(incomingPlayer);
                let newList = this.context.game.players;
                newList.push(incomingPlayer);
                this.context.setGame({...this.context.game, players : newList})
            }
        });

        //On s'abonne à l'indication de début de partie
        subscribeToStartGame((err, updatedGame) => {
            console.log('la partie démarre');
            this.context.setGame(updatedGame);
            this.props.setStartGame(true);
        });
    }


    render(){
        return(<div>
            <Container>
                <Row>
                    <Col>
                        <h3>Bienvenue {this.props.player.name}</h3>
                        <h2>{this.context.game.name}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        En attente de joueurs...
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            this.context.game.players.map((player, index) => {
                                return (
                                    <Badge key={index}>
                                        {player.name}
                                    </Badge>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <Spinner animation="grow" variant="danger"/>
                    </Col>
                </Row>
            </Container>
        </div>)

    }


}

GameWaitingRoom.contextType = GameContext;

export default GameWaitingRoom