// Core
import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import ActionBar from "../actionBar/actionBar";
import Menu from "../menu/menu";
import ActivitiesList from "../activitiesList/activitiesList";
import MissedList from "../missedList/missedList";
import ArchivedList from "../archivedList/archivedList";
import ContentScreen from "../contentScreen/contentScreen";
import FooterBar from "../footerBar/footerBar";
import CoverButton from "../ui/CoverButton/coverButton";

export default function PhoneCore() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [pageType, setPageType] = useState("activities");
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const showMessage = () => {
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 1000);
  };

  const handleSelectMenu = (pageName) => {
    setPageType(pageName);
  };

  return (
    <div className={`phone-core ${isCollapsed ? "collapsed" : ""}`}>
      <div className="phone-core__head">
        <ActionBar toggleCollapse={toggleCollapse} isCollapsed={isCollapsed} showMessage={showMessage} showCopyMessage={showCopyMessage} />{" "}
      </div>

      <div className="phone-core__title">
        {pageType === "activities" && <h1>Activities</h1>}
        {pageType === "missed" && <h1>Missed</h1>}
        {pageType === "archived" && <h1>Archived</h1>}
      </div>

      <Menu onSelectMenu={handleSelectMenu} pageType={pageType} />

      <div className={"phone-core__page"}>
        {pageType === "activities" && <ActivitiesList />}
        {pageType === "missed" && <MissedList />}
        {pageType === "archived" && <ArchivedList />}
      </div>
      {/* <FooterBar /> */}

      <CoverButton isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
    </div>
  );
}
