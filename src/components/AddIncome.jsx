import React, { Component } from "react";

class AddIncome extends Component {
  state = {
    categories: [
      { key: "Salary", icon: "fas fa-credit-card" },
      { key: "Gift", icon: "fas fa-gift" },
      { key: "Donation", icon: "fas fa-donate" },
      { key: "Investment", icon: "fas fa-money-check" }
    ],
    selected: ""
  };
  render() {
    return (
      <div className="financial-bg">
        <h1 className="financial-title">
          <span style={{ borderBottom: "1px solid #27ae60" }}>
            Add your incomes here
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
      </div>
    );
  }
}

export default AddIncome;
