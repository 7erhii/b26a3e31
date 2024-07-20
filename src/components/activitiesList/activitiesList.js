// Core
import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import PhoneItem from "../phoneItem/phoneItem";

// Hooks
import { useActivitiesFetch } from "../../hooks/use-activities-fetch";
import { usePhoneCallArchive } from "../../hooks/use-phonecall-archive";
import PreloaderItem from "../preloaderItem/preloaderItem";

export default function ActivitiesList() {
  const { fetchActivitiesData, activitiesData, isLoadingActivitiesData } = useActivitiesFetch();
  const { submitAllPhoneCallToArchive, submitOnePhoneCallToArchive } = usePhoneCallArchive();

  const handleAllToArchive = async () => {
    if (activitiesData.length === 0) {
      return;
    }

    try {
      await submitAllPhoneCallToArchive(activitiesData);
      await fetchActivitiesData();
      console.log("All activities have been archived");
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  const handleToArchive = async (item) => {
    try {
      await submitOnePhoneCallToArchive(item);
      await fetchActivitiesData();
    } catch (error) {
      console.log("Handler to archive failed: ", error);
    }
  };

  return (
    <div className={"activities-list"}>
      <h1>Activities List</h1>

      <div className="activities-list__actions">
        <button className="activities-list__archive" type={"button"} onClick={handleAllToArchive}>
          All to Archive
        </button>
      </div>

      <div className="activities-list__content">
        {isLoadingActivitiesData && <PreloaderItem />}
        {activitiesData.map((item, idx) => {
          return <PhoneItem key={item.id} item={item} onRemove={handleToArchive} />;
        })}
      </div>
    </div>
  );
}
