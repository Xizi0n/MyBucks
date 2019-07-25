import React from "react";
import MyFinancialList from "./MyFinancialList";
import { Redirect } from "react-router-dom";
import store from "../stores/store";
import { observer } from "mobx-react";

const MyFinancialsPage = () => {
  return (
    <div className="financial-bg">
      {store.authStore.isAuthenticated ? (
        <MyFinancialList />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default observer(MyFinancialsPage);
