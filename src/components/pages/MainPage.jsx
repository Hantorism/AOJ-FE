import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [isHealthy, setIsHealthy] = useState('Backend not working...');

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
