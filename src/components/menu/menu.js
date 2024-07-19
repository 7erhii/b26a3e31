import React, { useState } from "react";

// Style
import style from "./style.scss";

// Icons
import { BiPlus } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { RiArchive2Fill } from "react-icons/ri";

export default function Menu(props) {
  const { onSelectMenu } = props;

  const handleClickMenu = (pageName) => {
    onSelectMenu?.(pageName);
  };

  // const [isArchiveTab, setIsArchiveTab] = useState(false);
  //
  // const handleArchiveAll = async () => {
  //   if (isArchiveTab) {
  //     await fetch("https://aircall-backend.onrender.com/reset", {
  //       method: "PATCH",
  //     });
  //     console.log("All items unarchived");
  //   } else {
  //     const archivePromises = filteredData.map((item) =>
  //       fetch(`https://aircall-backend.onrender.com/activities/${item.id}`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ is_archived: true }),
  //       }),
  //     );
  //     await Promise.all(archivePromises);
  //     console.log("All items archived");
  //   }
  //
  //   // refreshData();
  //   // setIsEditMode(false);
  // };

  return (
    <div className="menu">
      <button onClick={() => handleClickMenu("activities")} className="menu__button">
        <BiPlus />
        activities
      </button>

      <button onClick={() => handleClickMenu("missed")} className="menu__button">
        <HiPhoneMissedCall />
        missed
      </button>
      <button onClick={() => handleClickMenu("archived")} className="menu__button">
        <RiArchive2Fill />
        archive
      </button>

      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    if (filteredData.length > 0) setIsEditMode(true);*/}
      {/*  }}*/}
      {/*  className={`menu__button ${!filteredData.length ? "inactive" : ""}`}*/}
      {/*>*/}
      {/*  <RiArchive2Fill/>*/}
      {/*  Edit*/}
      {/*</button>*/}
    </div>
  );
}
