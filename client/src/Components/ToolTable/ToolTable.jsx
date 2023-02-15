import { useState } from "react";
import "./ToolTable.css";
const ToolTable = ({ tools }) => {
    const [nameFilter, setNameFilter] = useState();
    const filteredToolList = tools.filter((tool) => {
        if(nameFilter === "" && nameFilter === tool.name)
        return tool;
    });

    return (
  <div className="ToolTable">
    <input type="text" onChange={(e) => setNameFilter(e.target.value)}></input>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weigth</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {filteredToolList.map((tool) => (
          <tr key={tool._id}>
            <td>{tool.name}</td>
            <td>{tool.weigth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)};

export default ToolTable;
