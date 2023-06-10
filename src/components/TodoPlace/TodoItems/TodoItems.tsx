import styles from "./TodoItems.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoItems = () => {
  return (
    <div className={styles.list}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoItems;
