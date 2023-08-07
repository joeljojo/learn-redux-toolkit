import AddTodo from "./AddTodo";
import Table from "./Table";

const TodoList = () => {
  return (
    <div className="todo-list-table">
      <AddTodo />
      <h2>Todo App using Redux Toolkit</h2>
      <Table />
    </div>
  );
};

export default TodoList;
