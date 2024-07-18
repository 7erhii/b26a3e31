import React, { useState } from "react";

import { BiPlus } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { RiArchive2Fill } from "react-icons/ri";

export default function FilterCall({ setFilter, isEditMode, setIsEditMode }) {
  const [isArchiveTab, setIsArchiveTab] = useState(false);

  const handleArchiveAll = () => {
    console.log(isArchiveTab ? "Unarchiving all items" : "Archiving all items");
  };

  const handleArchiveItem = () => {
    console.log(isArchiveTab ? "Unarchiving item" : "Archiving item");
  };

  const renderDefaultButtons = () => (
    <>
      <button
        onClick={() => {
          setFilter("all");
          setIsArchiveTab(false);
        }}
        className="plugin-filter-call__button"
      >
        <BiPlus />
        all
      </button>
      <button
        onClick={() => {
          setFilter("missed");
          setIsArchiveTab(false);
        }}
        className="plugin-filter-call__button"
      >
        <HiPhoneMissedCall />
        missed
      </button>
      <button
        onClick={() => {
          setFilter("archive");
          setIsArchiveTab(true);
        }}
        className="plugin-filter-call__button"
      >
        <RiArchive2Fill />
        archive
      </button>
      <button
        onClick={() => setIsEditMode(true)}
        className="plugin-filter-call__button"
      >
        <RiArchive2Fill />
        Edit
      </button>
    </>
  );

  const renderEditButtons = () => (
    <>
      <button onClick={handleArchiveAll} className="plugin-filter-call__button">
        <RiArchive2Fill />
        {isArchiveTab ? "unarchive all" : "archive all"}
      </button>
      <button
        onClick={handleArchiveItem}
        className="plugin-filter-call__button"
      >
        <RiArchive2Fill />
        {isArchiveTab ? "unarchive item" : "archive item"}
      </button>
      <button
        onClick={() => setIsEditMode(false)}
        className="plugin-filter-call__button"
      >
        <RiArchive2Fill />
        Cancel
      </button>
    </>
  );

  return (
    <div className="plugin-filter-call">
      {isEditMode ? renderEditButtons() : renderDefaultButtons()}
    </div>
  );
}
