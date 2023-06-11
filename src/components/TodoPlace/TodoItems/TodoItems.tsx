import styles from "./TodoItems.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useAppSelector } from "../../../hooks/hooks";
import { SortPropEnum } from "../../../types/types";

const TodoItems = () => {
  const { items } = useAppSelector((state) => state.todos);
  const { sortType } = useAppSelector((state) => state.sort);

  return (
    <ul className={styles.list}>
      {!items.length && (
        <h1 className="text-center text-xl text-fuchsia-300">
          Добавьте задачу, чтобы увидеть список
        </h1>
      )}
      {sortType.value === SortPropEnum.ALL
        ? items.map((item) => <TodoItem key={item.id} {...item} />)
        : null}
      {sortType.value === SortPropEnum.CHECKED
        ? items.map((item) =>
            item.checked ? <TodoItem key={item.id} {...item} /> : null
          )
        : null}
      {sortType.value === SortPropEnum.ACTIVE
        ? items.map((item) =>
            !item.checked ? <TodoItem key={item.id} {...item} /> : null
          )
        : null}
    </ul>
  );
};

export default TodoItems;
