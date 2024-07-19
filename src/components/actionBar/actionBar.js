// Core
import React from "react";

// Icons
import { IoIosClose } from "react-icons/io";

export default function ActionBar(props) {
  const { toggleCollapse } = props;
  return (
    <div className="action-bar">
      <button onClick={toggleCollapse} className="action-bar__close">
        <IoIosClose />
      </button>
      <button className="action-bar__que">?</button>
    </div>
  );
}
