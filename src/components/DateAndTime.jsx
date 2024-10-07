import React, { useEffect, useState } from "react";

const DateAndTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Clean up on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="text-white text-2xl font-mono">
        {formatTime(dateTime)}
      </div>
      <div className="text-white text-2xl font-mono mt-2">
        {formatDate(dateTime)}
      </div>
    </>
  );
};

export default DateAndTime;
