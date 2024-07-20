import React, { useState } from "react";

// Style
import style from "./style.scss";

// Icons
import { BiPlus } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { RiArchive2Fill } from "react-icons/ri";

export default function Menu(props) {
  const { onSelectMenu, pageType } = props;

  const handleClickMenu = (pageName) => {
    onSelectMenu?.(pageName);
  };

  return (
    <div className={`menu ${pageType}`}>
      <button onClick={() => handleClickMenu("activities")} className={`menu__button menu__button--activities ${pageType === "activities" ? "active" : ""}`}>
        <BiPlus />
        activities
      </button>

      <button onClick={() => handleClickMenu("missed")} className={`menu__button menu__button--missed ${pageType === "missed" ? "active" : ""}`}>
        <HiPhoneMissedCall />
        missed
      </button>

      <button onClick={() => handleClickMenu("archived")} className={`menu__button menu__button--archived ${pageType === "archived" ? "active" : ""}`}>
        <RiArchive2Fill />
        archive
      </button>
    </div>
  );
}
