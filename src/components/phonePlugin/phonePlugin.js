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

  useEffect(() => {
    fetch("https://aircall-backend.onrender.com/activities")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data.filter((item) => !item.is_archived));
      });
  }, []);

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
      />
      <ContentScreen data={filteredData} isEditMode={isEditMode} />
      <PluginActionFooterBar />
      <CoverButton isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
    </div>
  );
}
