import React, { Component } from "react";
import store from "../stores/store";

class AddFinancial extends Component {
  state = {
    categories: [
      { key: "Food", icon: "fas fa-hamburger" },
      { key: "Bill", icon: "fas fa-money-check-alt" },
      { key: "Fuel", icon: "fas fa-gas-pump" },
      { key: "Vacation", icon: "fas fa-plane-departure" },
      { key: "Public transport", icon: "fas fa-bus-alt" },
      { key: "Clothing", icon: "fas fa-tshirt" }
    ],
    selected: "",
    date: this.getCurrentDate(),
    amount: 0,
    frequency: "",
    currency: "",
    disabled: true
  };

  getCurrentDate() {
    const today = new Date();
    const month =
      parseInt(today.getMonth()) < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth();
    const day =
      parseInt(today.getDate()) < 10 ? "0" + today.getDate() : today.getDate();
    return `${today.getFullYear()}-${month}-${day}`;
  }

  handleChange = event => {
    console.log(event);
    let { name, value } = event.target;
    if (name === "amount") {
      if (value < 0) {
        value = 0;
      }
    }
    this.setState(
      {
        [name]: value
      },
      () => {
        const { selected, amount, frequency, currency } = this.state;
        if (
          selected !== "" &&
          amount !== 0 &&
          frequency !== "" &&
          currency !== ""
        ) {
          this.setState({
            disabled: false
          });
        }
      }
    );
  };

  handleClick = () => {
    const expenseToAdd = {
      when: this.state.date,
      category: this.state.selected,
      amount: this.state.amount,
      currency: this.state.currency,
      frequency: this.state.frequency,
      type: "expense"
    };
    if (
      this.state.selected !== "" &&
      this.state.date !== "" &&
      this.state.amount !== 0
    ) {
      store.financialRecordsStore.addFinancialRecord(expenseToAdd);
    }
    document.getElementById("result").classList.add("showResult");
    setTimeout(() => {
      document.getElementById("result").classList.add("hideResult");
    }, 1000);
  };

  render() {
    return (
      <div className="addFinancial">
        <h1 className="financial-title">
          <span style={{ borderBottom: "1px solid #27ae60" }}>
            Add your expenses here
          </span>
        </h1>
        <div
          className={`addFinancial-instruction
            ${
              this.state.selected !== "" ? "financial-category-selected" : null
            }`}
        >
          Select a category
          {this.state.selected !== "" ? (
            <i
              className="fas fa-check"
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          ) : null}
        </div>
        <div className="financial-category">
          {this.state.categories.map(category => {
            return (
              <div
                className="category-item"
                key={category.key}
                onClick={() => this.setState({ selected: category.key })}
              >
                <i
                  className={`${category.icon} ${
                    category.key === this.state.selected
                      ? "financial-category-selected"
                      : null
                  }`}
                />
                <label>{category.key}</label>
              </div>
            );
          })}
        </div>
        <div
          className={`addFinancial-instruction
            ${
              this.state.amount !== 0 &&
              this.state.date !== "" &&
              this.state.currency !== ""
                ? "financial-category-selected"
                : null
            }`}
        >
          Fill out expenses form
          {this.state.amount !== 0 && this.state.date !== "" ? (
            <i
              className="fas fa-check"
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          ) : null}
        </div>
        <div className="addFinancial-form">
          <div className="addFinancial-input-field">
            <label className="addFinancial-input-label">Date</label>
            <input
              type="date"
              value={this.state.date}
              name="date"
              onChange={this.handleChange}
            />
          </div>
          <div className="addFinancial-input-field">
            <label className="addFinancial-input-label">Amount</label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <div className="addFinancial-input-field">
            <label className="addFinancial-input-label">Currency</label>
            <select
              name="currency"
              id="addfinancial-select"
              value={this.state.currency}
              onChange={this.handleChange}
            >
              <option value="">Select a currency</option>
              <option value="HUF">HUF</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div
          className={`addFinancial-instruction
            ${
              this.state.frequency !== "" ? "financial-category-selected" : null
            }`}
        >
          Select frequency
          {this.state.frequency !== "" ? (
            <i
              className="fas fa-check"
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          ) : null}
        </div>
        <div className="addFinancial-form">
          <select
            name="frequency"
            id="addfinancial-select"
            value={this.state.frequency}
            onChange={this.handleChange}
          >
            <option value="">Select frequency</option>
            <option value="One Time">One time</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <div className="addFinancial-input-field">
            <button
              disabled={this.state.disabled}
              className={` ${
                this.state.amount !== 0 &&
                this.state.date !== "" &&
                this.state.selected !== "" &&
                this.state.frequency !== "" &&
                this.state.currency !== ""
                  ? "addFinancial-all-done"
                  : null
              }`}
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
        </div>
        <div id="result" className="result">
          Expense added successfully
        </div>
      </div>
    );
  }
}

export default AddFinancial;
