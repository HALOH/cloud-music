import React from 'react';
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont';
import routes from "./routes/index";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  );
}

export default App;
