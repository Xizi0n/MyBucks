import React from "react";
import store from "../stores/store";
import { observer } from "mobx-react";

const MyFinancialList = () => {
  return (
    <React.Fragment>
      <h1 className="financial-title">
        <span>My financials</span>
      </h1>
      <div className="financial-list">
        <div className="grid">
          <span className="financial-list-header">Date</span>
          <span className="financial-list-header">Category</span>
          <span className="financial-list-header">Amount</span>
          <span className="financial-list-header">Currency</span>
          <span className="financial-list-header">Frequency</span>
          <span className="financial-list-header">Action</span>
          {store.financialRecordsStore.sortBy.map(fRecord => {
            return (
              <React.Fragment>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  {fRecord.when}
                </span>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  {fRecord.category}
                </span>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  {fRecord.type === "expense" ? "-" : "+"}
                  {fRecord.amount}
                </span>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  {fRecord.currency}
                </span>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  {fRecord.frequency}
                </span>
                <span
                  className={
                    fRecord.type === "expense"
                      ? "financial-list-expense"
                      : "financial-list-income"
                  }
                >
                  <i
                    className="fas fa-trash"
                    onClick={() => {
                      console.log(fRecord.id);
                      const shouldDelete = window.confirm(
                        "Do you really want to delete?"
                      );
                      if (shouldDelete) {
                        store.financialRecordsStore.removeFinancialRecord(
                          fRecord.id
                        );
                      }
                    }}
                  />
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(MyFinancialList);
