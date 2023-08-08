import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

let nextId = 1;

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nextId++,
      description: value,
      completed: false,
    };

    dispatch(addTodo(todo));
    setValue("");
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-controls">
          <div className="input" onChange={handleInputChange} value={value}>
            <input type="text" value={value} placeholder="Add todo" />
          </div>
          <div>
            <Button type="submit" label="New" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
