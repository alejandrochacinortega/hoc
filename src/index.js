import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Resources from './components/Resources';
import requireAuth from './components/require_authentication';

import { Router, Route, browserHistory} from 'react-router';


const createStoreWithoutMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithoutMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='resources' component={requireAuth(Resources)} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

