import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import store from "./stores/store";
import { createContext } from "react";
import MyFinancialsPage from "./components/MyFinancialsPage";
import AddFinancial from "./components/addFinancial";

const GlobalStore = new createContext(store);

function App() {
  return (
    <GlobalStore.Provider>
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/myfinancials" component={MyFinancialsPage} />
          <Route path="/addfinancials/:type" component={AddFinancial} />
          <Redirect from="/addfinancials" to="/addfinancials/expense" />
        </Router>
      </div>
    </GlobalStore.Provider>
  );
}

export default App;
