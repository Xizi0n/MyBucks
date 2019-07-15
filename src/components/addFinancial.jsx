import React, { Component } from "react";

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
    amount: 0
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
    let { name, value } = event.target;
    if (name === "amount") {
      if (value < 0) {
        value = 0;
      }
    }
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    document.getElementById("result").classList.add("showResult");
    setTimeout(() => {
      document.getElementById("result").classList.add("hideResult");
    }, 5000);
  };

  render() {
    return (
      <div className="addFinancial">
        <h1>
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
              this.state.amount !== 0 && this.state.date !== ""
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
            <label className="addFinancial-input-label">&nbsp;</label>
            <button
              className={` ${
                this.state.amount !== 0 &&
                this.state.date !== "" &&
                this.state.selected !== ""
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
