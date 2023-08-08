import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../features/todos/todoSlice";
import UpdateForm from "./UpdateForm";
import { useState } from "react";

const Table = ({ todos }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleModalClose = () => {
    setSelectedTodo(null);
    setUpdatedDescription("");
    setIsModalOpen(false);
  };

  const handleSaveChanges = () => {
    if (selectedTodo) {
      const updatedTodo = { ...selectedTodo, description: updatedDescription };
      dispatch(updateTodo(updatedTodo));
      handleModalClose();
    }
  };

  const handleUpdate = (todo) => {
    setSelectedTodo(todo);
    setUpdatedDescription(todo.description);
    setIsModalOpen(true);
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleChecked = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Decription</th>
          <th>Completed</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChecked(todo.id)}
              />
            </td>
            <td>
              <Button
                type="button"
                label="Update"
                onClick={() => handleUpdate(todo)}
              />
            </td>
            <td>
              <Button
                type="button"
                label="Delete"
                onClick={() => handleDelete(todo.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <UpdateForm
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        updatedDescription={updatedDescription}
        setUpdatedDescription={setUpdatedDescription}
        handleSaveChanges={handleSaveChanges}
      />
    </table>
  );
};
export default Table;
