import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function CoverButton({ isCollapsed, toggleCollapse }) {
  return (
    <div className={`cover ${isCollapsed ? "slide-up" : ""}`} onClick={toggleCollapse}>
      <button >
        <FiPhoneCall />
      </button>
    </div>
  );
}
