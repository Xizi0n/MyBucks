import { observable, action, decorate } from "mobx";

class AuthStore {
  authenticatedUser = {
    email: ""
  };
  isAuthenticated = false;

  authenticate(email) {
    this.authenticatedUser.email = email;
    this.isAuthenticated = true;
  }

  logout() {
    this.authenticatedUser.email = "";
    this.isAuthenticated = false;
  }
}

decorate(AuthStore, {
  authenticatedUser: observable,
  isAuthenticated: observable,
  authenticate: action,
  logout: action
});

export default AuthStore;
