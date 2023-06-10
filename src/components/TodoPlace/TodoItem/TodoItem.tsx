import { useState } from "react";
import styles from "./TodoItem.module.scss";

const TodoItem = () => {
  const [click, setClick] = useState(false);

  const classN = click ? styles.active : "";

  return (
    <div className={styles.item}>
      <button
        onClick={() => setClick((prev) => !prev)}
        className={classN}
      ></button>
      <p>text zadachi</p>
    </div>
  );
};

export default TodoItem;
