import { useState } from "react";

const Filter = ( {originalEmployeeList, setEmployeeList} ) => {
    const [filterValue, setFilterValue] = useState("");

    function filterEmployees() {
        if(filterValue !== "") {
            setEmployeeList(originalEmployeeList.filter((employee) => {
                if(employee.level.includes(filterValue) || employee.position.includes(filterValue)) {
                    return employee;
                }           
            }));
        }else {
            setEmployeeList(originalEmployeeList);
        }
    }
    return (
        <div>
            <input id="filterLevelOrPosition" type="text" onChange={(e)=> setFilterValue(e.target.value)} placeholder="One thing at the time"></input>
            <button onClick={() => filterEmployees()}>Filter</button>
        </div>
    )
}

export default Filter;