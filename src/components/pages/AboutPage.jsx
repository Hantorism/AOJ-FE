import React, { useEffect, useState, useContext } from "react";
import Context from "../contexts/Context";
import LoadUserInfo from "../../utils/LoadUserInfo";

const MainPage = () => {
  LoadUserInfo();

  return (
    <div>
      <div>
        <b>오늘 한것</b>
      </div>

      <div>
        <b>오늘 할것</b>
        - figma 보고 problems page 만들기
        - 비밀번호 유효성 체크
      </div>
    </div>
  );
};

export default MainPage;
