import React from "react";

const StatusMonitor = ({ name, apiData }) => {
  const timeStamp = new Date(apiData.time);
  const time = timeStamp.toLocaleTimeString("es-AR", { hour12: false });

  return (
    <div>
      <h2>{name}</h2>
      <h2>{apiData.success ? "Healty" : "Error"}</h2>
      <p>{apiData.hostname}</p>
      <p>{time}</p>
    </div>
  );
};

export default StatusMonitor;
