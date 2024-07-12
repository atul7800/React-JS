import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  // console.log(`Title : ${title} | Category : ${category} | Amount : ${amount}`);

  const handleSubmit = (e) => {
    e.preventDefault();

    //chek the validity of the form manually [not working]
    // if (!e.target.checkValidity()) {
    //   console.log("Inside if");
    //   e.target.reportValidity();
    //   return;
    // }
    //

    const expenses = { title, category, amount, id: crypto.randomUUID() };
    console.log(expenses);
    setExpenses((prevValue) => [...prevValue, expenses]);

    e.target.reset();
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          required
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
