import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import PositionTable from "../Components/PositionTable";

const fetchPositions = () => {
    return fetch("/api/positions").then((res) => res.json());
}

const PositionList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPositions()
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    if (loading) {
       return <Loading />;
    }

    return <PositionTable positions={data} />;
}

export default PositionList;