import React, { useState, useEffect } from "react";

import PluginActionBar from "./pluginActionBar/pluginActionBar";
import FilterCall from "./filterCall/filterCall";
import ContentScreen from "./contentScreen/contentScreen";
import PluginActionFooterBar from "./pluginActionFooterBar/pluginActionFooterBar";
import CoverButton from "./CoverButton/coverButton";

export default function PhonePlugin() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isEditMode, setIsEditMode] = useState(false);
  const [missedCount, setMissedCount] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://aircall-backend.onrender.com/activities"
      );
      const data = await response.json();
      setData(data);
      updateFilteredData(data);

      const missedCalls = data.filter(
        (item) => item.call_type === "missed" && item.is_archived === false
      ).length;
      setMissedCount(missedCalls);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFilteredData = (newData) => {
    switch (filter) {
      case "all":
        setFilteredData(newData.filter((item) => !item.is_archived));
        break;
      case "missed":
        setFilteredData(
          newData.filter(
            (item) => item.call_type === "missed" && !item.is_archived
          )
        );
        break;
      case "archive":
        setFilteredData(newData.filter((item) => item.is_archived));
        break;
      default:
        setFilteredData(newData.filter((item) => !item.is_archived));
    }
  };

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredData(data.filter((item) => !item.is_archived));
        break;
      case "missed":
        setFilteredData(
          data.filter(
            (item) => item.call_type === "missed" && !item.is_archived
          )
        );
        break;
      case "archive":
        setFilteredData(data.filter((item) => item.is_archived));
        break;
      default:
        setFilteredData(data.filter((item) => !item.is_archived));
    }
  }, [filter, data]);

  return (
    <div className={`phone-plugin ${isCollapsed ? "collapsed" : ""}`}>
      <PluginActionBar toggleCollapse={toggleCollapse} />
      <FilterCall
        setFilter={setFilter}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        filteredData={filteredData}
        refreshData={fetchData}
      />
      <ContentScreen data={filteredData} isEditMode={isEditMode} />
      <PluginActionFooterBar />
      <CoverButton
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
        missedCalls={missedCount}
      />
    </div>
  );
}
