import { useState } from "react";
import "./ToolTable.css";
import handleSubmit from "./onSubmit";

const ToolTable = ({ tools }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const filteredToolList = tools.filter((tool) => {
    if (tool.name.includes(nameFilter)) {
      return tool;
    } else {
      return null;
    }
  });

  return (
    <div className="ToolTable">
      <input type="text" onChange={(e) => setNameFilter(e.target.value)}></input>
      <h1>Creat Tool</h1>
      <form onSubmit={() => handleSubmit(newName, newWeight)}>
        <label>
          Name
        </label>
          <input type="text" onChange={(e) => setNewName(e.target.value)}></input>
        <label>
          Weight
        </label>
          <input type="number" onChange={(e) => setNewWeight(e.target.value)} value={newWeight}></input>
        <button type="submit" value="submit" style={{width:"150px"}}>Create</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredToolList.map((tool) => (
            <tr key={tool._id}>
              <td>{tool.name}</td>
              <td>{tool.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default ToolTable;
