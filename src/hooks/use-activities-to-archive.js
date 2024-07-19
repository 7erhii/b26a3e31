// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useActivitiesToArchive = () => {
  const [loading, setLoading] = useState(false);

  const submitAllActivitiesToArchive = async (data) => {
    console.log(data, "All Activities");
    const promises = data.map((item) => submitOneActivityToArchive(item));
    await Promise.all(promises);
  };

  const submitOneActivityToArchive = async (item) => {
    try {
      setLoading(true);
      const response = await axiosInstance.patch(`/activities/${item.id}`, {
        is_archived: true,
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    submitAllActivitiesToArchive,
    submitOneActivityToArchive,
    isLoadingActivitiesToArchive: loading,
  };
};
