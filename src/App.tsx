import React from 'react';
import './App.scss';
import { Body } from './Components/Body/Body';
import { Container } from './Components/Container/Container';
import './normalize.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Body />
      </Container>
    </BrowserRouter>
  );
}

export default App;
