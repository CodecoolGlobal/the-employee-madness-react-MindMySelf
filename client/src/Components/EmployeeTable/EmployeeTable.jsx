import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import BeforeDelete from "./BeforeDelete";

const EmployeeTable = ({ employees, onDelete }) => {
  const [isDeleteable, setIsDeletable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="EmployeeTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Position</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.level}</td>
              <td>{employee.position}</td>
              <td>
                {isClicked && <BeforeDelete
                  setIsDeletable={setIsDeletable}
                  setIsClicked={setIsClicked} />}
                <Link to={`/update/${employee._id}`}>
                  <button type="button">Update</button>
                </Link>
                <button type="button"
                  onClick={() => {
                    setIsClicked(true);
                    console.log("I've been clicked!", isClicked);

                    if (isDeleteable === true) {
                      onDelete(employee._id);
                      setIsDeletable(false);
                    }
                  }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default EmployeeTable;
