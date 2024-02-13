import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  updateText,
  updateCurrentTodoText,
} from "@/redux/todo";

import TodoItem from "./todoItem";
import styles from "./todoList.module.css";

const TodoList = () => {
  const { todos, currentTodoText } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (currentTodoText.trim()) {
      dispatch(addTodo(currentTodoText));
      dispatch(updateCurrentTodoText("")); // Clear the input after adding a todo
    }
  };

  const completeTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const updateTodoTextHandler = (id, text) => {
    dispatch(updateText({ id, text }));
  };

  const handleInputChange = (event) => {
    dispatch(updateCurrentTodoText(event.target.value));
  };

  return (
    <div role="list" className={styles.container}>
      <h1>To-Do List</h1>
      <input
        className={styles.inputField}
        value={currentTodoText}
        onChange={handleInputChange}
        aria-label="New todo"
      />
      <button className={styles.addButton} onClick={addTodoHandler}>
        Add
      </button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={() => completeTodoHandler(todo.id)}
          removeTodo={() => removeTodoHandler(todo.id)}
          updateTodoText={(text) => updateTodoTextHandler(todo.id, text)}
        />
      ))}
    </div>
  );
};

export default TodoList;
