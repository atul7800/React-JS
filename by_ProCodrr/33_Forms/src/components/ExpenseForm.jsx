import React, { useState, useEffect } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

function ExpenseForm({ setExpenses }) {
  const [warnings, setWarnings] = useState({});
  const errorsData = {};

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  function resetForm() {
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }

  const validateFormData = () => {
    /* Method 1
    const requiredFields = ["title", "category", "amount"];
    requiredFields.map((field) => {
      if (!e.target[field].value) {
        console.log(`${field} can't be empty`);
      }
    });
    */
    // Method 2

    const requiredFileds = ["Title", "Category", "Amount"];
    requiredFileds.forEach((field) => {
      if (!expense[field.toLowerCase()]) {
        errorsData[field] = `${field} can't be empty`;
      }
    });
    setWarnings(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validateFormData();

    if (Object.keys(validationResult).length) {
      return;
    }

    setExpenses((prevValue) => [
      ...prevValue,
      { ...expense, id: crypto.randomUUID() },
    ]);

    resetForm();
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
      <CustomInput
        label={"Title"}
        id={"title"}
        name={"title"}
        value={expense.title}
        handleOnChange={handleOnChange}
        errorMsg={warnings.Title}
      />
      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleOnChange}
        >
          <option value="" hidden>
            Select category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Bikes">Bikes</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="warningMsg">{warnings.Category}</p>
      </div> */}

      <CustomSelect
        label={"Category"}
        id={"category"}
        name={"category"}
        value={expense.category}
        handleOnChange={handleOnChange}
        defaultOption={"Select category"}
        options={["Grocey", "Clothes", "Education", "Bikes", "Medicine"]}
        errorMsg={warnings.Category}
      />
      <CustomInput
        label={"Amount"}
        id={"amount"}
        name={"amount"}
        value={expense.amount}
        handleOnChange={handleOnChange}
        errorMsg={warnings.Amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
