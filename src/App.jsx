import React from 'react';
import { MainWrapper, GlobalStyle } from './App.style';
import { Home } from './pages';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <MainWrapper>
                <GlobalStyle />
                <Home />
            </MainWrapper>
        </Provider>
    );
};

export default App;
