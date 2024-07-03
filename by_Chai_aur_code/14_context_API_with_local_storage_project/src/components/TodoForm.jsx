import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  //getting the addTodo function from TodoContext to use it
  const { addTodo } = useTodo();

  /*+++++adding new todo+++++*/
  const add = (e) => {
    e.preventDefault();

    //checking if todo state is empty, if empty return
    if (!todo) return;

    //if todo state is not empty, proceed and add todo, we are passing a todo as an object because in APP.jsx addTodo method takes a todo as an object
    addTodo({ todo: todo, completed: false });
    setTodo("");
  };

  /**/

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
