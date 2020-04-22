import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App(){
  return (
        <div>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>{' '}
        <Button color="success">Success</Button>{' '}
        <Button color="warning">Warning</Button>{' '}
        <Button color="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button color="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button color="link">Link</Button>
      </div>
  );
}

export default App;
