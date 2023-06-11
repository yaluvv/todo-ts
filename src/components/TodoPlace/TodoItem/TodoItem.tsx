import { TodoType } from "../../../types/types";
import { useAppDispatch } from "../../../hooks/hooks";
import { checkTodo } from "../../../store/slices/todoSlice";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, title, checked }: TodoType) => {
  const dispatch = useAppDispatch();
  const classN = checked ? styles.active : "";

  const handleCheckTodo = (id: string) => {
    dispatch(checkTodo({ id }));
  };

  return (
    <li className={styles.item}>
      <button onClick={() => handleCheckTodo(id)} className={classN}></button>
      <p className={classN}>{title}</p>
    </li>
  );
};

export default TodoItem;
