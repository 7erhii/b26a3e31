// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useActivitiesFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance("/activities");
      const dataFilterOnlyActivities = data.filter((item) => item.is_archived === false);
      setData(dataFilterOnlyActivities);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then((r) => console.log("Data fetched"));
  }, []);

  return {
    fetchActivitiesData: fetchData,
    activitiesData: data,
    isLoadingActivitiesData: loading,
  };
};
