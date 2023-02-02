export default function Sorting( sortby, {employeeList, setEmployeeList} ) {
    let newList = [...employeeList];
    newList.sort((a, b) => {
        if(a[sortby] > b[sortby]) {
            return 1;
        }else if(a[sortby] < b[sortby]){
            return -1;
        }else {
            return 0;
        }
    })

    setEmployeeList(newList)
}