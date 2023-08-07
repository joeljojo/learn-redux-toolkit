import Button from "./Button";

const Table = () => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Decription</th>
        <th>Completed</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr>
        <td>1</td>
        <td>reading Redux/Toolkit</td>
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <Button type="button" label="Update" onClick={""} />
        </td>
        <td>
          <Button type="button" label="Delete" onClick={""} />
        </td>
      </tr>
    </table>
  );
};
export default Table;
