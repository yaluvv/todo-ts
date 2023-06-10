import styles from "./TodoButtons.module.scss";

const TodoButtons = () => {
  return (
    <div className={styles.buttons}>
      <button>Checked</button>
      <button>Active</button>
      <button>Clear Checked</button>
      <button>Clear All</button>
    </div>
  );
};

export default TodoButtons;
