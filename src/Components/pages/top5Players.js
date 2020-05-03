import React, { Component } from "react";
import "./top5players.css";

class top5Players extends Component {
    render() {
        return(
            <div>
                <div class="top5players">
                    <h1>Top 5 Players</h1>
                </div>
                
                <h3 id="winner1">1.</h3>
                <h3 id="winner2">2.</h3>
                <h3 id="winner3">3.</h3>
                <h3 id="winner4">4.</h3>
                <h3 id="winner5">5.</h3>
            </div>
        );
    }
}

export default top5Players;

            