import React, { useEffect } from 'react';
import './App.scss';
import { Body } from './Components/Body/Body';
import { Container } from './Components/Container/Container';
import './normalize.css'
import { BrowserRouter } from 'react-router-dom';
import { useAppDispath } from './Hooks/useTypeSelector';
import { setAuth } from './Redux/Reducers/SliceReducers';

function App() {
  const dispath = useAppDispath()

  useEffect(() => {
    const getTokenSessionStorage = localStorage.getItem('token')

    if (getTokenSessionStorage !== null) {
      dispath(setAuth(true))
    }
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Body />
      </Container>
    </BrowserRouter>
  );
}

export default App;
