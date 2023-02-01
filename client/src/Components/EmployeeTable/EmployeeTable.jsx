import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import Filter from "../Filter";

const EmployeeTable = ({ employees, onDelete }) => {
  const [employeeList, setEmployeeList] = useState(employees)
  return (
  <div className="EmployeeTable">
        <Filter originalEmployeeList={employees} setEmployeeList={setEmployeeList} />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Position</th>
          <th />
        </tr>
        <tr>
          <th className="sorting-names">
            <button onClick={() => setEmployeeList(employees.sort((a, b) => {
              if(a.name.split(" ")[0] > b.name.split(" ")[0]) {
                return -1
              }else if(a.name.split(" ")[0] < b.name.split(" ")[0]){
                return 1;
              }else {
                return 0;
              }
            }))}>Arrange by First Name</button>
            <button>Arrange by Middle Name</button>
            <button>Arrange by Last Name</button>
          </th>
          <th>
            <button>Arrange by Level</button>
          </th>
          <th>
            <button>Arrange by Position</button>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.level}</td>
            <td>{employee.position}</td>
            <td>
              <Link to={`/update/${employee._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)};

export default EmployeeTable;
