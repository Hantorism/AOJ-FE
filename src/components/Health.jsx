import React, { useEffect, useState } from "react";

const Health = () => {
  const [health, setHealth] = useState("Backend not working...");

  useEffect(() => {
    (async () => {
      await fetch("/api/health")
        .then((response) => response.json())
        .then((data) => setHealth(data));
    })();
  });

  return (
    <div>
      <p>{health}</p>
    </div>
  );
};

export default Health;
