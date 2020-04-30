import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
    Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import './topNavBar.css'
import {BrowserRouter as Router, Link} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import CreateQuizButton from '../atoms/CreateQuizButton';

import user from '../../user.png';
import listing from '../../listing.png';
//essayer d'ajouter une icones dans la navbar (maison => homewhite.png)
//import Image from 'react-bootstrap/Image'

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Kahoot
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkContainer to="/profile">
              <NavLink>
                <img src={user} style={{width:20, marginTop: -5}} />
                Mon compte
              </NavLink>
            </LinkContainer>
            <LinkContainer to="/listingquizz">
              <NavLink>
              <img src={listing} style={{width:15, marginTop: 0}} />
              listingquizz
              </NavLink>
            </LinkContainer>
        </Nav>
      </Collapse>
            <CreateQuizButton/>
        </Navbar>
      </div>
  );
};

export default TopNavbar;