import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from '~/store';

import styles from './styles.module.css';

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(),
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>Wadus</div>;
    </Provider>
  );
}

export default App;
