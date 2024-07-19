// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useMissedCallToArchive = () => {
  const [loading, setLoading] = useState(false);

  const submitAllMissedCallsToArchive = async (data) => {
    console.log(data, "All missed calls");
    const promises = data.map((item) => submitOneMissedCallToArchive(item));
    await Promise.all(promises);
  };

  const submitOneMissedCallToArchive = async (item) => {
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
    submitAllMissedCallsToArchive,
    submitOneMissedCallToArchive,
    isLoadingMissedCallToArchive: loading,
  };
};
