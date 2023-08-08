import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import Table from "./Table";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="todo-list-table">
      <h2>Todo App using Redux Toolkit</h2>
      <AddTodo />
      <Table todos={todos} />
    </div>
  );
};

export default TodoList;
