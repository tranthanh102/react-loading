import React from "react";
import { useSelector } from "react-redux";

const Todoshow = () => {
  const todoList = useSelector((state) => state.todos.todoList);

  return (
    <div>
      {todoList.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
};

export default Todoshow;
