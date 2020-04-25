import React from 'react';
import { MDBCol } from "mdbreact"; 
import './search.css';


const Findquizz = (props) => {
      return (
        <div class="container">
            <MDBCol md="3">
                <input className="form-control" type="text" placeholder="Cherher un quizz" aria-label="Search" />
            </MDBCol>
        </div>
      );
};

export default Findquizz;