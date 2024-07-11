import React from "react";

function ExpenseForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Before for");
    for (const value of formData.values()) {
      console.log(value);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
  //   setExpenses((prevState) => [...prevState, expense]);
  //   e.target.reset();
  // };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option hidden>Select category</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
