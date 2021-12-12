import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from '~/store';
import Layout from '~/components/Layout';
import DarkMode from '~/components/DarkMode';
import Settings from '~/components/Settings';

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
      <Layout>
        <DarkMode />
        <Settings />
      </Layout>
    </Provider>
  );
}

export default App;
