import FinancialRecordsStore from "./expense";
import AuthStore from "./auth";

class Store {
  financialRecordsStore;
  authStore;
  constructor() {
    this.financialRecordsStore = new FinancialRecordsStore();
    this.authStore = new AuthStore();
  }
}

const store = new Store();

export default store;
