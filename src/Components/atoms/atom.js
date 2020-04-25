import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import './atom.css'

//essayer d'ajouter une icones dans la navbar (maison => homewhite.png)
//import Image from 'react-bootstrap/Image'

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">Kahoot !</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="">Accueil</NavLink>
            </NavItem>
            <NavItem>
                <NavLink></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Mon Compte</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Mes Kahoots</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
            <NavLink href="/">
                <Button color="success">Créer</Button>{' '}
            </NavLink>
        
      </Navbar>
    </div>
  );
};

export default Navbars;