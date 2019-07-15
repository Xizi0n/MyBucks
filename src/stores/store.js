import ExpenseStore from "./expense";
import AuthStore from "./auth";

class Store {
  expenseStore;
  authStore;
  constructor() {
    this.expenseStore = new ExpenseStore();
    this.authStore = new AuthStore();
  }
}

const store = new Store();

export default store;
