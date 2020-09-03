import React from "react";
import { PersistGate } from "redux-persist/integration/react";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";
import GlobalStyles from "./styles/global";

import history from "./services/history";
import store from "~/store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
