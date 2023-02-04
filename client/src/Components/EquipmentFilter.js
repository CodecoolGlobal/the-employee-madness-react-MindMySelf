import { useState } from "react";

const Filter = ( {originalEquipmentList, setEquipmentList,} ) => {
    const [filterValue, setFilterValue] = useState("");

    function filterEmployees() {
        if(filterValue !== "") {
            setEquipmentList(originalEquipmentList.filter((equipment) => {
                if(equipment.type.includes(filterValue) || equipment.amount === Number(filterValue)) {
                    return equipment;
                }else {
                    return null;
                }
            }));
        }else {
            setEquipmentList(originalEquipmentList);
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