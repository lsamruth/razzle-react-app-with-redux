import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { store } from "./store/index";
import { Provider } from "react-redux";

hydrate(
    <Provider store={store}>
  <BrowserRouter>


    <App />
  </BrowserRouter>

    </Provider>,

  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
