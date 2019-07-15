import uuid from "uuid/v1";
import { observable, action, computed, decorate } from "mobx";

class ExpenseStore {
  expenses = [{ id: 1, when: "2019.07.15", category: "fuel", amount: 20000 }];

  get expenseCount() {
    return this.expenses.length;
  }

  addExpense(expense) {
    const updatedExpense = { ...expense, id: uuid() };
    this.expenses.push(updatedExpense);
  }

  removeExpense(id) {
    this.expenses.filter(expense => expense.id !== id);
    console.log(this.expenses);
  }
}

decorate(ExpenseStore, {
  expenses: observable,
  expenseCount: computed,
  addExpense: action,
  removeExpense: action
});

export default ExpenseStore;
