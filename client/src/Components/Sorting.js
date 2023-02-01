export default function Sorting( sortby, {originalEmployeeList, setEmployeeList} ) {
    if(sortby === "First Name") {
        setEmployeeList(originalEmployeeList.sort((a, b) => {
            if(a.name.split(" ")[0] > b.name.split(" ")[0]) {
                return -1
            }else if(a.name.split(" ")[0] < b.name.split(" ")[0]){
                return 1;
            }
        }))
    }
}