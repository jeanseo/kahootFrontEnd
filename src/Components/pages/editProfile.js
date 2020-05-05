import React, { Component } from "react";
import TopNavBar from "../molecules/topNavBar";

class editProfile extends Component {
    render() {
        return (
            <div>
                <h2>VOTRE PROFIL</h2>
                <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
}

export default editProfile;