import React, { useEffect, useState, useContext } from "react";
import Context from "../contexts/Context";
import LoadUserInfo from "../../utils/LoadUserInfo";

const MainPage = () => {
  const [isHealthy, setIsHealthy] = useState('Backend not working...');
  LoadUserInfo();

  useEffect( () => {
    console.log(process.env.REACT_APP_API_URL)
    fetch(process.env.REACT_APP_API_URL + 'health')
      .then((response) => response.json())
      .then((data) => setIsHealthy(data));
  }, []);

  return (
    <div>
      <p>{isHealthy}</p>
    </div>
  );
};

export default MainPage;
