import React from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import FinancialRecordPage from "./components/FinancialRecordPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import store from "./stores/store";
import { createContext } from "react";

const GlobalStore = new createContext(store);

function App() {
  return (
    <GlobalStore.Provider>
      <div className="App">
        <Router>
          <Header />
          <Route path="/" exact component={Welcome} />
          <Route path="/addexpenses" component={FinancialRecordPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
        </Router>
      </div>
    </GlobalStore.Provider>
  );
}

export default App;
