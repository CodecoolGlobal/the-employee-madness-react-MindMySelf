import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import Filter from "../Filter";
import Sorting from "../Sorting"

const EmployeeTable = ({ employees, onDelete }) => {
  const [employeeList, setEmployeeList] = useState(employees);
  return (
  <div className="EmployeeTable">
        <Filter originalEmployeeList={employees} setEmployeeList={setEmployeeList} />
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Middle name</th>
          <th>Last name</th>
          <th>Level</th>
          <th>Position</th>
          <th />
        </tr>
        <tr>
          <th>
            <button onClick={() => Sorting("firstName", { employeeList, setEmployeeList })}>Arrange by First Name</button>
          </th>
          <th>
            <button onClick={() => Sorting("middleName", { employeeList, setEmployeeList })}>Arrange by Middle Name</button>
          </th>
          <th>
            <button onClick={() => Sorting("lastName", { employeeList, setEmployeeList })}>Arrange by Last Name</button>
          </th>
          <th>
            <button onClick={() => Sorting("level", { employeeList, setEmployeeList })}>Arrange by Level</button>
          </th>
          <th>
            <button onClick={() => Sorting("position", { employeeList, setEmployeeList })}>Arrange by Position</button>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.firstName}</td>
            <td>{employee.middleName}</td>
            <td>{employee.lastName}</td>
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
