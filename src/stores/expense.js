import uuid from "uuid/v1";
import { observable, action, computed, decorate } from "mobx";

class FinancialRecordsStore {
  financialRecords = [
    {
      id: 1,
      when: "2019-07-15",
      category: "Fuel",
      amount: 20000,
      currency: "HUF",
      frequency: "Monthly",
      type: "expense"
    },
    {
      id: 2,
      when: "2019-09-12",
      category: "Salary",
      amount: 220000,
      currency: "HUF",
      frequency: "Monthly",
      type: "income"
    }
  ];

  get sortBy() {
    return this.financialRecords.sort((x, y) => {
      if (new Date(x.when) < new Date(y.when)) {
        return -1;
      }
      if (new Date(x.when) > new Date(y.when)) {
        return 1;
      }
      return 0;
    });
  }

  get expenseCount() {
    return this.financialRecords.length;
  }

  addFinancialRecord(expense) {
    const updatedExpense = { ...expense, id: uuid() };
    this.financialRecords.push(updatedExpense);
  }

  removeFinancialRecord(id) {
    this.financialRecords = this.financialRecords.filter(
      frecord => frecord.id !== id
    );
  }
}

decorate(FinancialRecordsStore, {
  financialRecords: observable,
  expenseCount: computed,
  sortBy: computed,
  addExpense: action,
  removeExpense: action
});

export default FinancialRecordsStore;
