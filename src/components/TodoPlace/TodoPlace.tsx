import TodoButtons from "./TodoButtons/TodoButtons";
import TodoItems from "./TodoItems/TodoItems";
import styles from "./TodoPlace.module.scss";

const TodoPlace = () => {
  return (
    <div className={styles.place}>
      <TodoItems />
      <TodoButtons />
    </div>
  );
};

export default TodoPlace;
