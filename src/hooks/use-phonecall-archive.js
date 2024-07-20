// Core
import { useEffect, useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const usePhoneCallArchive = () => {
  const [loading, setLoading] = useState(false);

  const submitAllPhoneCallToArchive = async (data) => {
    console.log(data, "All Activities");
    const promises = data.map((item) => submitOnePhoneCallToArchive(item));
    await Promise.all(promises);
  };

  const submitOnePhoneCallToArchive = async (item) => {
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

  const submitAllPhoneCallFromArchive = async (data) => {
    console.log(data, "All Activities");
    const promises = data.map((item) => submitOnePhoneCallFromArchive(item));
    await Promise.all(promises);
  };

  const submitOnePhoneCallFromArchive = async (item) => {
    try {
      setLoading(true);
      const response = await axiosInstance.patch(`/activities/${item.id}`, {
        is_archived: false,
      });
    } catch (error) {
      console.error("Eroor moved from archive", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    submitAllPhoneCallToArchive,
    submitOnePhoneCallToArchive,

    submitAllPhoneCallFromArchive,
    submitOnePhoneCallFromArchive,

    isLoadingPhoneCallToArchive: loading,
  };
};
