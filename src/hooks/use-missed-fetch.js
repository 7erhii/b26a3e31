// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useMissedCallFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance("/activities");
      const dataFilterOnlyMissed = data.filter(item => !item.is_archived && item.call_type === "missed");
      setData(dataFilterOnlyMissed);
    } catch (error) {
      console.error("Failed to fetch missed call data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData().then((r) => console.log("Data missed calls fetched"));
  }, []);

  return {
    fetchMissedCallData: fetchData,
    missedCallsData: data,
    isLoadingMissedCallData: loading,
  };
};
