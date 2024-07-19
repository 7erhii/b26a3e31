// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useMissedFromArcive = () => {
  const [loading, setLoading] = useState(false);

  const submitAllCallsFromArchive = async (data) => {
    console.log(data, "All Archived");

    const promises = data.map((item) => submitOneActivityToUnarchive(item));
    await Promise.all(promises);
  };

  const submitOneActivityToUnarchive = async (item) => {
    try {
      setLoading(true);
      const response = await axiosInstance.patch(`/activities/${item.id}`, {
        is_archived: false,
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    submitAllCallsFromArchive,
    submitOneActivityToUnarchive,
    isLoadingActivitiesUnarchive: loading,
  };
};
