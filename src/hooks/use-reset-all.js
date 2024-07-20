// Core
import { useState } from "react";

// Utils
import axiosInstance from "../utils/api";

export const useResetAll = () => {
  const [loading, setLoading] = useState(false);

  const submitResetAll = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.patch("/reset");
    } catch (error) {
      console.error("Failed Reset All", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoadingResetAll: loading,
    submitResetAll,
  };
};
