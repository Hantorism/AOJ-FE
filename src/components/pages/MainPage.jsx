import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [main, setMain] = useState("Backend not working...");

  useEffect(() => {
    (async () => {
      await fetch("/api/health")
        .then((response) => response.json())
        .then((data) => setMain(data));
    })();
  });

  return (
    <div>
      <p>{main}</p>
    </div>
  );
};

export default MainPage;