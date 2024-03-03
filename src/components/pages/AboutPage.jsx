import React, { useEffect, useState, useContext } from "react";
import Context from "../contexts/Context";
import LoadUserInfo from "../../utils/LoadUserInfo";

const MainPage = () => {
  LoadUserInfo();

  return (
    <div>
      <div>
        This is About Page.
      </div>
    </div>
  );
};

export default MainPage;
