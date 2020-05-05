import React, {Component} from "react";
import Card from "react-bootstrap/Card";

const GamePlayerWaitingRoom = ({player}) => {

    return(
            <Card>
                {player.name}
            </Card>
        )
};

export default GamePlayerWaitingRoom

