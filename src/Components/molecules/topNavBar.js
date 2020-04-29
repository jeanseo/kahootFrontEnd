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

//essayer d'ajouter une icones dans la navbar (maison => homewhite.png)
//import Image from 'react-bootstrap/Image'

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Kahoot !</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkContainer to="/">
              <NavLink>
                Accueil
              </NavLink>
            </LinkContainer>
            <LinkContainer to="/profile">
              <NavLink>
                Mon compte
              </NavLink>
            </LinkContainer>
          </Nav>
        </Collapse>
        <LinkContainer to="/createquiz">
          <Button color="success">
            Créer
          </Button>
        </LinkContainer>
      </Navbar>
    </div>
  );
};

export default TopNavbar;