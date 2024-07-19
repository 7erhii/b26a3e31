// Core
import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import PhoneItem from "../phoneItem/phoneItem";

// Hooks
import { useActivitiesFetch } from "../../hooks/use-activities-fetch";
import { useActivitiesToArchive } from "../../hooks/use-activities-to-archive";

export default function ActivitiesList() {
  const { fetchActivitiesData, activitiesData, isLoadingActivitiesData } = useActivitiesFetch();
  const { submitAllActivitiesToArchive } = useActivitiesToArchive();

  const handleAllToArchive = async () => {
    if (activitiesData.length === 0) {
      return;
    }

    try {
      await submitAllActivitiesToArchive(activitiesData);
      await fetchActivitiesData();
      console.log("All activities have been archived");
    } catch (error) {
      console.error("Failed: ", error);
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
        {activitiesData.map((item, idx) => {
          return <PhoneItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}
