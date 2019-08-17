import React from 'react';
import { MainWrapper, GlobalStyle } from './App.style';
import { Home } from './pages';

const App = () => {
    return (
        <MainWrapper>
            <GlobalStyle />
            <Home />
        </MainWrapper>
    );
};

export default App;
