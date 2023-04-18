import React from 'react';
import './App.scss';
import { Container } from './Components/Container/Container';
import { FormUserLogin } from './Components/FormUserLogin/FormUserLogin';
import './normalize.css'

function App() {
  return (
    <Container>
      <FormUserLogin />
    </Container>
  );
}

export default App;
