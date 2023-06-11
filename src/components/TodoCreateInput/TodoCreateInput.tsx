import { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./TodoCreateInput.module.scss";
import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo } from "../../store/slices/todoSlice";

const TodoCreateInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const minTitleValue = 5;

  const handleCreateItem = () => {
    dispatch(addTodo({ id: nanoid(), title, checked: false }));
    setTitle("");
  };
  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };
  return (
    <div className={styles.create}>
      <input
        value={title}
        onChange={handleChangeValue}
        type="text"
        placeholder="Create a new todo..."
      />
      <button
        disabled={title.length < minTitleValue}
        onClick={handleCreateItem}
      ></button>
      {title.length < minTitleValue && (
        <span className="absolute bottom-[-30px] text-red-400 left-[50%] translate-x-[-50%] whitespace-nowrap">
          Осталось символов для добавления задачи -{" "}
          {minTitleValue - title.length}
        </span>
      )}
    </div>
  );
};

export default TodoCreateInput;
