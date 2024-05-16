import React, { useEffect, useState, useContext } from "react";
import Context from "../contexts/Context";
import LoadUserInfo from "../../utils/LoadUserInfo";

const MainPage = () => {
  const [isLive, setIsLive] = useState('Backend is not live...');
  const [isReady, setIsReady] = useState('Backend is not ready...');
  const [isHealthy, setIsHealthy] = useState('Backend is not healthy...');
  LoadUserInfo();

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_URL)
    fetch('http://localhost:8080/api' + '/livez')
      .then((response) => response.text())
      .then((data) => setIsLive(data));
    fetch('http://localhost:8080/api' + '/readyz')
      .then((response) => response.text())
      .then((data) => setIsReady(data));
    fetch('http://localhost:8080/api' + '/health')
      .then((response) => response.json())
      .then((data) => setIsHealthy(data.message));
  }, []);

  return (
    <div>
      <p>{isLive}</p>
      <p>{isReady}</p>
      <p>{isHealthy}</p>
    </div>
  );
};

export default MainPage;
