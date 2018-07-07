// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers

import channels_reducer from './reducers/channels_reducer';
import current_user_reducer from './reducers/current_user_reducer';
import messages_reducer from './reducers/messages_reducer';
import selected_channel_reducer from './reducers/selected_channel_reducer';
const reducers = combineReducers({
  messages: messages_reducer,
  channels: channels_reducer,
  currentUser: current_user_reducer,
  selectedChannel: selected_channel_reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: "general",
};
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
