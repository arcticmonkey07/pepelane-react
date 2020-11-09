import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

import Content from './Components/Content/Content';

function App() {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;