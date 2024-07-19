import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function PhoneItem({ item, isEditMode, isActive, toggleItem }) {
  const detailsRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.to(detailsRef.current, { maxHeight: 500, opacity: 1, duration: 0.5 }); // Установите достаточно большой maxHeight
    } else {
      gsap.to(detailsRef.current, { maxHeight: 0, opacity: 0, duration: 0.5 });
    }
  }, [isActive]);

  return (
    <div className="phone-item"  onMouseLeave={() => isActive && toggleItem()}>
      <div className="phone-item__line" onClick={toggleItem}>
        <div>{item.direction}</div>
        <div>{item.from}</div>
        <div>{item.to}</div>
        <div ref={detailsRef} style={{ maxHeight: 0, overflow: 'hidden', opacity: 0 }}>
          {isActive && (
            <div className="phone-item__details">
              <div>{item.duration}</div>
              <div>{new Date(item.created_at).toLocaleString()}</div>
            </div>
          )}
        </div>
      </div>
      {isEditMode && <input type="checkbox" />}
    </div>
  );
}
