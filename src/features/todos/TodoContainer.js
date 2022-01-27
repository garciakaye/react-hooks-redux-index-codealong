import React from "react";
import { useSelector } from "react-redux";

function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);

  console.log(todos);
  return <div>TodoContainer</div>;
}

export default TodoContainer;