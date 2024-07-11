import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenceTable from "./components/ExpenceTable";
import ContextMenu from "./components/ContextMenu";
import ExpenseData from "./ExpenseData";

function App() {
  const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState(ExpenseData);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenceTable expenses={expenses} />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
