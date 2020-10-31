import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

import Header from './Components/Header';
import Main from './Components/Main';

function App() {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;