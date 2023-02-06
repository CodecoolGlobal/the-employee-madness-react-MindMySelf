import { useState } from "react";
import { Link } from "react-router-dom";
import "./EquipmentTable.css";
import Filter from "../EquipmentFilter";
import Sorting from "../EquipmentSorting"

const EquipmentTable = ({ equipments, onDelete }) => {
  const [equipmentList, setEquipmentList] = useState(equipments);
  const [aToZ, setAToZ] = useState(true);
  return (
  <div className="EmployeeTable">
        <Filter originalEquipmentList={equipments} setEquipmentList={setEquipmentList} />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th />
        </tr>
        <tr>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("name", { equipmentList, setEquipmentList, aToZ });
              }}>Arrange by Name</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("type", { equipmentList, setEquipmentList, aToZ });
              }}>Arrange by Type</button>
          </th>
          <th>
            <button onClick={() => {
              setAToZ(!aToZ);
              Sorting("amount", { equipmentList, setEquipmentList, aToZ });
              }}>Arrange by Amount</button>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {equipmentList.map((equipment) => (
          <tr key={equipment._id}>
            <td>{equipment.name}</td>
            <td>{equipment.type}</td>
            <td>{equipment.amount}</td>
            <td>
              <Link to={`/equipment/update/${equipment._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(equipment._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)};

export default EquipmentTable;
