import styles from "./TodoButtons.module.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  removeAllTodo,
  removeAllCheckedTodo,
} from "../../../store/slices/todoSlice";
import { addSort } from "../../../store/slices/sortSlice";
import { SortType, SortPropEnum } from "../../../types/types";
import { useAppSelector } from "../../../hooks/hooks";

const TodoButtons = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.todos);
  const checkedItems = items.filter((item) => item.checked);
  const activeItems = items.filter((item) => !item.checked);

  const handleClearAll = () => {
    if (!items.length) {
      alert("Добавьте хотя бы одну задачу");
      return;
    }

    if (window.confirm("Вы точно хотите удалить все посты?")) {
      dispatch(removeAllTodo());
    }
  };
  const handleClearChecked = () => {
    if (!checkedItems.length) {
      alert("Завершите хотя бы одну задачу");
      return;
    }
    if (window.confirm("Вы точно хотите удалить все завершенные задачи?")) {
      dispatch(removeAllCheckedTodo());
    }
  };

  const handleAddSort = (value: SortType) => dispatch(addSort(value));

  return (
    <div className={styles.buttons}>
      <button
        onClick={() => {
          if (!checkedItems.length) {
            alert("Завершите хотя бы одну задачу");
            return;
          }
          handleAddSort({ value: SortPropEnum.CHECKED });
        }}
      >
        Checked
      </button>
      <button onClick={() => handleAddSort({ value: SortPropEnum.ACTIVE })}>
        Active
      </button>
      <button onClick={() => handleAddSort({ value: SortPropEnum.ALL })}>
        All todos
      </button>
      <button onClick={handleClearChecked}>Clear Checked</button>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default TodoButtons;
