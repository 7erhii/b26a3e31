import React, { useState, useEffect } from "react";

// Style
import style from "./style.scss";

// Components
import PhoneItem from "../phoneItem/phoneItem";

// Hooks
import { useMissedCallFetch } from "../../hooks/use-missed-fetch";
import { useMissedCallToArchive } from "../../hooks/use-missed-to-archive";

export default function MissedList() {
  const { fetchMissedCallData, missedCallsData, isLoadingMissedCallData } = useMissedCallFetch();
  const { submitAllMissedCallsToArchive } = useMissedCallToArchive();

  const handleMissedToArchive = async () => {
    if (missedCallsData.length === 0) {
      return;
    }

    try {
      await submitAllMissedCallsToArchive(missedCallsData);
      await fetchMissedCallData();
      console.log("All missed calls have been archived");
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  return (
    <div className={"missed-list"}>
      <h1>Missed List</h1>

      <div className="missed-list__actions">
        <button type={"button"} onClick={handleMissedToArchive}>
          Archive missed
        </button>
      </div>

      <div className="missed-list__content">
        {missedCallsData.map((item, idx) => {
          return <PhoneItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}
