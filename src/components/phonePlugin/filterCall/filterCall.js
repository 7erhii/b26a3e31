import React from "react";
import FilterTab from "../filterTab/filterTab";

import { BiPlus } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { RiArchive2Fill } from "react-icons/ri";

export default function FilterCall() {
  return (
    <div>
      <div className="plugin-filter-call">
        <div className="plugin-filter-call__logo"></div>
        <button className="plugin-filter-call__button">
          <BiPlus />
          all
        </button>
        <button className="plugin-filter-call__button">
          <HiPhoneMissedCall />
          missed
        </button>
        <button className="plugin-filter-call__button">
          <RiArchive2Fill />
          archive
        </button>
        {/* <FilterTab /> */}
      </div>
    </div>
  );
}
