import React, {Component} from "react";
import Card from "react-bootstrap/Card";

const GamePlayerWaitingList = ({player}) => {

    return(
            <Card>
                {player.name}
            </Card>
        )
};

export default GamePlayerWaitingList

