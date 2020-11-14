import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware  } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/index';
import thunk from 'redux-thunk';

import Content from './Components/Content/Content';
import Header from './Components/Header/Header';

const App: FC = () => {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Content  />
      </Provider>
    </BrowserRouter>
  );
}

export default App;