import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('DETAILS', putMovieDetail);
}

//TODO- Fix sending post to router
function* putMovieDetail(action) {
    try {
        const response = yield axios.post('/details', action.payload);
        // yield put({ type: 'GET_GENRES'})
    } catch (err) {
        console.log(err);
    }
}

function* getMovies() {
    try {
        const response = yield axios.get('/movie');
        // sends data from server to movies reducer
        yield put({type: 'SET_MOVIES', payload: response.data});
    }
    catch(err) {
        console.log('Error in GET ', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// navigate to the details page
const edits = (state = [], action) => {
    switch (action.type) {
        case 'DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        edits
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
