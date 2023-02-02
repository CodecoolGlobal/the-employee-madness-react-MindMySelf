import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import Filter from "../Filter";
import Sorting from "../Sorting"

const EmployeeTable = ({ employees, onDelete }) => {
  const [employeeList, setEmployeeList] = useState(employees);
  const [aToZ, setAToZ] = useState(true);
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
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("firstName", { employeeList, setEmployeeList, aToZ });
              }}>Arrange by First Name</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("middleName", { employeeList, setEmployeeList, aToZ });
              }}>Arrange by Middle Name</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("lastName", { employeeList, setEmployeeList, aToZ });
          }}>Arrange by Last Name</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("level", { employeeList, setEmployeeList, aToZ });
              }}>Arrange by Level</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("position", { employeeList, setEmployeeList, aToZ });
              }}>Arrange by Position</button>
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
