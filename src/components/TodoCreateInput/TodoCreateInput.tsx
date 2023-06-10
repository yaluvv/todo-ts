import styles from "./TodoCreateInput.module.scss";

const TodoCreateInput = () => {
  return (
    <div className={styles.create}>
      <input type="text" placeholder="Create a new todo..." />
      <button></button>
    </div>
  );
};

export default TodoCreateInput;
