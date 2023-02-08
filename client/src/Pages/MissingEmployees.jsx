import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";

const fetchingEmployees = (signal) => {
    return fetch("/missing", { signal }).then((res) => res.json());
}

const deleteEmployees = (id) => {
    return fetch(`/api/employees/${id}`, {method: "DELETE"}).then((res) => res.json());
}

const MissingEmployees = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const handleDelete = (id) => {
        deleteEmployees(id).catch((err) => {
            console.log(err);
        });
        setData((employees) => {
            return employees.filter((employee) => employee._id !== id);
        });
    };

    useEffect(() => {
        const controller = new AbortController();

        fetchingEmployees(controller.signal)
            .then((employees) => {
                setLoading(false);
                setData(employees);
            })
            .catch((error) => {
                if(error.name !== "AbortError") {
                    setData(null);
                    throw error;
                }
            });

        return () => controller.abort();
    }, []);

    if(loading) {
        return <Loading />;
    }

    return <EmployeeTable employees={data} onDelete={handleDelete}/>;
}

export default MissingEmployees;