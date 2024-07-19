// Core
import React from "react";

// Icons
import { FiPhoneCall } from "react-icons/fi";

export default function CoverButton(props) {
  const { isCollapsed, toggleCollapse, missedCalls } = props;

  return (
    <div className={`cover ${isCollapsed ? "slide-up" : ""}`} onClick={toggleCollapse}>
      <button>
        <FiPhoneCall />
      </button>
      <div>{missedCalls}</div>
    </div>
  );
}
