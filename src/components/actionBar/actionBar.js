// Core
import React from "react";

// HOOKS
import { useResetAll } from "../../hooks/use-reset-all";

// Icons
import { IoIosClose } from "react-icons/io";

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
        <IoIosClose />
      </button>
      <button className="action-bar__que" onClick={handleResetAll}>
        ?
      </button>
    </div>
  );
}
