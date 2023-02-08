import { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import editMissing from "../EditMissing";

const EmployeeTable = ({ employees, setEmployees, onDelete }) => {
  const [aToZ, setAToZ] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const [filterValue, setFilterValue] = useState("");
  // const [employeePresent, setEmployeePresent] = useState(null);
  const filteredEmployees = employees.filter((employee) => {
    if (employee.level.includes(filterValue) || employee.position.includes(filterValue)) {
      return employee;
    } else {
      return null;
    }
  })

  filteredEmployees.sort((a, b) => {
    if(a[sortBy] > b[sortBy]) {
        return aToZ === true ? 1 : -1;
    }else if(a[sortBy] < b[sortBy]){
        return aToZ === true ? -1 : 1;
    }else {
        return 0;
    }
})
  return (
    <div className="EmployeeTable">
      <div>
        <input
          id="filterLevelOrPosition"
          type="text"
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="One thing at the time"></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Middle name</th>
            <th>Last name</th>
            <th>Level</th>
            <th>Position</th>
            <th>Present</th>
            <th />
          </tr>
          <tr>
            <th>
              <button onClick={() => {
                setAToZ(!aToZ);
                setSortBy("firstName");
              }}>Arrange by First Name</button>
            </th>
            <th>
              <button onClick={() => {
                setAToZ(!aToZ);
                setSortBy("middleName");
              }}>Arrange by Middle Name</button>
            </th>
            <th>
              <button onClick={() => {
                setAToZ(!aToZ);
                setSortBy("lastName");
              }}>Arrange by Last Name</button>
            </th>
            <th>
              <button onClick={() => {
                setAToZ(!aToZ);
                setSortBy("level");
              }}>Arrange by Level</button>
            </th>
            <th>
              <button onClick={() => {
                setAToZ(!aToZ);
                setSortBy("position");
              }}>Arrange by Position</button>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => {

            return (
              <tr key={employee._id}>
                <td>{employee.firstName}</td>
                <td>{employee.middleName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.level}</td>
                <td>{employee.position}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => editMissing(employee, employees, setEmployees)}
                    checked={employee.present}></input>
                </td>
                <td>
                  <Link to={`/update/${employee._id}`}>
                    <button type="button">Update</button>
                  </Link>
                  <button type="button" onClick={() => onDelete(employee._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default EmployeeTable;
