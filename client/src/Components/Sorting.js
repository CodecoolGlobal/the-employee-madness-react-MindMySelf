export default function Sorting( sortby, { employeeList, setEmployeeList, aToZ } ) {
    let newList = [...employeeList];
    const one = aToZ === true ? 1 : -1;
    newList.sort((a, b) => {
        if(a[sortby] > b[sortby]) {
            return one;
        }else if(a[sortby] < b[sortby]){
            return -one;
        }else {
            return 0;
        }
    })

    setEmployeeList(newList)
}