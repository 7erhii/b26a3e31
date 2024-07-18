import React from "react";
import PhoneItem from "../phoneItem/phoneItem";

export default function ContentScreen({ data, isEditMode }) {
  return (
    <div className="content-screen">
      {data.map((item) => (
        <PhoneItem key={item.id} item={item} isEditMode={isEditMode} /> 
      ))}
    </div>
  );
}
