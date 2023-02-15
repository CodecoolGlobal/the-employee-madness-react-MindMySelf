import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ToolTable from "../Components/ToolTable/ToolTable";

const fetchTools = (signal) => {
  return fetch("/tools", { signal }).then((res) => res.json());
};


const ToolList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  useEffect(() => {
    const controller = new AbortController();

    fetchTools(controller.signal)
      .then((tools) => {
        setLoading(false);
        setData(tools);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setData(null);
          throw error;
        }
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <ToolTable tools={data} />;
};

export default ToolList;
