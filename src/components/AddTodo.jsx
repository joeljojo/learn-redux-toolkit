import Button from "./Button";

const AddTodo = () => {
  return (
    <div className="form">
      <form onSubmit={""}>
        <div className="form-controls">
          <div className="input">
            <input type="text" />
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
