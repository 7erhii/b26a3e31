import React, { useRef, useEffect } from "react";
import { format, parseISO, isToday, isYesterday } from "date-fns";

// Style
import style from "./style.scss";
import { PiPhoneIncomingLight, PiPhoneOutgoingLight } from "react-icons/pi";

export default function PhoneItem({ item, isEditMode, isActive, toggleItem }) {
  const detailsRef = useRef(null);

  const isIncoming = item.direction === "inbound";
  const directionIcon = isIncoming ? <PiPhoneIncomingLight /> : <PiPhoneOutgoingLight />;
  const directionClass = isIncoming ? "phone-item__direction--inbound" : "phone-item__direction--outbound";

  const formatDate = (dateStr) => {
    const date = parseISO(dateStr);
    if (isToday(date)) {
      return format(date, "HH:mm"); // Время, если дата совпадает с текущей
    } else if (isYesterday(date)) {
      return "yesterday"; // Слово "yesterday", если дата - вчерашняя
    } else {
      return format(date, "dd MMM"); // Дата в формате "12 Jun", если более ранняя
    }
  };

  const formatDuration = (seconds) => {
    if (seconds === 0) {
      return "";
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes.toString().padStart(2, "0")}min`;
    } else if (minutes > 0) {
      return `${minutes}min ${remainingSeconds.toString().padStart(2, "0")}s`;
    } else {
      return `${remainingSeconds}s`;
    }
  };

  return (
    <div className="phone-item">
      <div className="phone-item__line">
        <div className="phone-item__callDetails">
          <div className={`phone-item__direction ${directionClass}`}>{directionIcon}</div>

          <div className="phone-item__contacts">
            <div>From: {item.from}</div>
            <div>To: {item.to}</div>
          </div>
        </div>
        <div className="phone-item__time">
          <div className="phone-item__created">{formatDate(item.created_at)}</div>
          <div className="phone-item__duration">{formatDuration(item.duration)}</div>
        </div>
      </div>
    </div>
  );
}
