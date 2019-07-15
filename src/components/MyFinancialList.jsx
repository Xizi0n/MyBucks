import React from "react";
import store from "../stores/store";

const MyFinancialList = () => {
  return (
    <React.Fragment>
      <h1 className="financial-title">
        <span>My financials</span>
      </h1>
      <div className="financial-list">
        <div className="financial-list-header">
          <div> Date </div>
          <div> Category </div>
          <div> Amount </div>
        </div>
        <ul>
          {store.expenseStore.expenses.map(expense => {
            return (
              <li key={expense.id}>
                <div className="info">{expense.when}</div>
                <div className="info">{expense.category}</div>
                <div className="info">{expense.amount} Ft</div>
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    console.log(expense.id);
                    store.expenseStore.removeExpense(expense.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MyFinancialList;
