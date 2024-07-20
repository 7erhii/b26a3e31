// Core
import React from "react";

// HOOKS
import { useResetAll } from "../../hooks/use-reset-all";

// Styles
import styles from "./style.scss";

// Icons
import { MdOutlinePhone } from "react-icons/md";

import { FaCircleDot } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

export default function ActionBar(props) {
  const { submitResetAll } = useResetAll();

  const { toggleCollapse } = props;

  const handleResetAll = async () => {
    try {
      await submitResetAll();
      window.location.reload();
    } catch (error) {
    } finally {
    }
  };

  return (
    <div className="action-bar">
      <button onClick={toggleCollapse} className="action-bar__close">
        {props.isCollapsed ? <MdOutlinePhone /> : <FaCircleDot />}
      </button>
      <button className="action-bar__que" onClick={handleResetAll}>
        <IoReload />
      </button>
    </div>
  );
}
