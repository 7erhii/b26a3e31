// Core
import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import PhoneItem from "../phoneItem/phoneItem";

// Hooks
import { useArchivedFetch } from "../../hooks/use-archived-fetch";
import { useMissedFromArcive } from "../../hooks/use-missed-from-archive";

export default function ArchivedList() {
  const { fetchArchivedData, archivedData, isLoadingArchivedsData } = useArchivedFetch();
  const { submitAllCallsFromArchive } = useMissedFromArcive();

  const handleUnarchiveAll = async () => {
    if (archivedData.length === 0) {
      return;
    }

    try {
      await submitAllCallsFromArchive(archivedData);
      await fetchArchivedData();
      console.log("All activities have been archived");
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  return (
    <div className={"activities-list"}>
      <h1>ArchivedList List</h1>
      <div className="activities-list__actions">
        <button type={"button"} onClick={handleUnarchiveAll}>
          Unarchive All
        </button>
      </div>
      <div className="activities-list__content">
        {archivedData.map((item, idx) => {
          return <PhoneItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}
