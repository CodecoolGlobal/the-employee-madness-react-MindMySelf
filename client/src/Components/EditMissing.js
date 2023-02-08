const editMissing = (targetEmployee, employees, setEmployees) => {
  let newEmployee = null;
  const pseudoEmployees = employees.map((employee) => {
    if (targetEmployee === employee) {
      newEmployee = { ...employee };
      newEmployee.present = !targetEmployee.present;
      return newEmployee;
    }
    return { ...employee };
  });

  setEmployees(pseudoEmployees);

  return fetch(`/api/employees/${newEmployee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee),
  }).then((res) => res.json());
};

export default editMissing;
