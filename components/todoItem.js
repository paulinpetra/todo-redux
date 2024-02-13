import styles from "./todoItem.module.css";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "@/redux/todo";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container} role="listitem">
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.isCompleted}
        onChange={() => dispatch(toggleTodo(todo.id))}
        aria-labelledby={`todo-${todo.id}`}
      />
      <span id={`todo-${todo.id}`} className={styles.text}>
        {todo.text}
      </span>
      <button
        className={styles.removeButton}
        onClick={() => dispatch(removeTodo(todo.id))}
        aria-label="Remove todo"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
