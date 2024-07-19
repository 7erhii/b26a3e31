import React, { useState } from "react";
import PhoneItem from "../phoneItem/phoneItem";

// Style
import "./style.scss";

export default function ContentScreen({ data, isEditMode }) {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="content-screen">
      {data.map((item) => (
        <PhoneItem
          key={item.id}
          item={item}
          isEditMode={isEditMode}
          isActive={activeItem === item.id}
          toggleItem={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
