import React, { useState } from "react";

import PluginActionBar from "./pluginActionBar/pluginActionBar";
import FilterCall from "./filterCall/filterCall";
import ContentScreen from "./contentScreen/contentScreen";
import PluginActionFooterBar from "./pluginActionFooterBar/pluginActionFooterBar";
import CoverButton from "./CoverButton/coverButton";

export default function PhonePlugin() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`phone-plugin ${isCollapsed ? "collapsed" : ""}`}>
      <PluginActionBar toggleCollapse={toggleCollapse} />
      <FilterCall />
      <ContentScreen />
      <PluginActionFooterBar />
      <CoverButton isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
    </div>
  );
}

