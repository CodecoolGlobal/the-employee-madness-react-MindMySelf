const editMissing = (employee) => {
    employee.present = !employee.present;
    console.log(employee);
    return fetch(`/api/employees/${employee._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }).then((res) => res.json());
}

export default editMissing;