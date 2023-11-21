import React, { useEffect } from 'react';
import './App.scss';
import { Body } from './Components/Body/Body';
import { Container } from './Components/Container/Container';
import './normalize.css'
import { BrowserRouter } from 'react-router-dom';
import { useAppDispath, useTypeSelector } from './Hooks/useTypeSelector';
import { setAuth } from './Redux/Reducers/SliceReducers';

function App() {
  const dispath = useAppDispath()
  const { isLoadingAuth } = useTypeSelector(state => state.data)

  useEffect(() => {
    const getTokenSessionStorage = localStorage.getItem('token')
    console.log(isLoadingAuth, getTokenSessionStorage)

    if (getTokenSessionStorage !== null) dispath(setAuth(true))
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Body />
      </Container>
    </BrowserRouter>
  );
}

export default React.memo(App);
