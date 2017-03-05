import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Resources from './components/Resources';

import { Router, Route, browserHistory} from 'react-router';


const createStoreWithoutMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithoutMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='resources' component={Resources} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import ReduxPromise from 'redux-promise';
//
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <App />
//     </Provider>
//     , document.querySelector('.container'));
