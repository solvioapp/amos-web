import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/global.scss';

import MainRouter from './containers/MainRouter.container';
import { store } from './helpers/redux/store/configure-store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <MainRouter />
            </Switch>
        </Router>
    </Provider>
);

export default App;
