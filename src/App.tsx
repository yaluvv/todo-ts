import TodoCreateInput from "./components/TodoCreateInput/TodoCreateInput";
import TodoPlace from "./components/TodoPlace/TodoPlace";
import styles from "./App.module.scss";
const App = () => {
  return (
    <div className="wrapper">
      <div className={styles.app}>
        <h1 className="mb-7 text-white text-center text-2xl">
          Количество задач: 0
        </h1>
        <TodoCreateInput />
        <TodoPlace />
      </div>
    </div>
  );
};
export default App;
