import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function CoverButton({
  isCollapsed,
  toggleCollapse,
  missedCalls,
}) {
  return (
    <div
      className={`cover ${isCollapsed ? "slide-up" : ""}`}
      onClick={toggleCollapse}
    >
      <button>
        <FiPhoneCall />
      </button>
      <div>{missedCalls}</div>
    </div>
  );
}
