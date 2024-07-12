import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevValue) => [...prevValue, expense]);
    resetForm(expense);
  };

  function resetForm(formData) {
    console.log("reset form called");
    formData.title = "";
    formData.category = "";
    formData.amount = "";
  }

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          required
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) => {
            setExpense((prevValue) => ({
              ...prevValue,
              title: e.target.value,
            }));
          }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          required
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) => {
            setExpense((prevValue) => ({
              ...prevValue,
              category: e.target.value,
            }));
          }}
        >
          <option value="" hidden>
            Select category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          required
          id="amount"
          name="amount"
          type="number"
          value={expense.amount}
          onChange={(e) => {
            setExpense((prevValue) => ({
              ...prevValue,
              amount: e.target.value,
            }));
          }}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
