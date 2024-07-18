import React from "react";

export default function PhoneItem({ item, isEditMode }) { 
  return (
    <div className="phone-item">
      <div className="phone-item__line">
        <div>{item.direction}</div>
        <div>{item.from}</div>
        <div>{item.to}</div>
        <div>{item.via}</div>
        <div>{item.duration}</div>
      </div>
      {isEditMode && <input type="checkbox" />} 
    </div>
  );
}
