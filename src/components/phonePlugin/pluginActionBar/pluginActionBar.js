import React from "react";
import { IoIosClose } from "react-icons/io";

export default function PluginActionBar({ toggleCollapse }) {
  return (
    <div className="plugin-action-bar">
      <button onClick={toggleCollapse} className="plugin-action-bar__close">
        <IoIosClose />
      </button>
      <button className="plugin-action-bar__que">?</button>
    </div>
  );
}
