// Core
import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import PhoneItem from "../phoneItem/phoneItem";

// Hooks
import { useArchivedFetch } from "../../hooks/use-archived-fetch";
import { usePhoneCallArchive } from "../../hooks/use-phonecall-archive";
export default function ArchivedList() {
  const { fetchArchivedData, archivedData, isLoadingArchivedsData } = useArchivedFetch();
  const { submitAllPhoneCallFromArchive, submitOnePhoneCallFromArchive } = usePhoneCallArchive();

  const handleUnarchiveAll = async () => {
    if (archivedData.length === 0) {
      return;
    }

    try {
      await submitAllPhoneCallFromArchive(archivedData);
      await fetchArchivedData();
      console.log("All activities have been archived");
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  const handleRemoveFromArchive = async (item) => {
    try {
      await submitOnePhoneCallFromArchive(item);
      await fetchArchivedData();
      console.log("All activities have been archived");
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  return (
    <div className={"archived-list"}>
      <h1>ArchivedList List</h1>
      <div className="archived-list__actions">
        <button className="archived-list__archive" type={"button"} onClick={handleUnarchiveAll}>
          Unarchive All
        </button>
      </div>
      <div className="archived-list__content">
        {archivedData.map((item, idx) => {
          return <PhoneItem key={idx} item={item} onRemove={handleRemoveFromArchive} />;
        })}
      </div>
    </div>
  );
}
