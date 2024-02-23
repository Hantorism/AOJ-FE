import React, { useEffect, useState, useContext } from "react";
import LoadUserInfo from "../../utils/LoadUserInfo";

const ProblemsPage = () => {
  LoadUserInfo();

    return (
    <div class="m-3 bg-dark text-white">
      <div class="problemTitle" style={{"vertical-align": "center"}}>
        <h3> Title </h3>
        <li>
          <ol> 1. [기초] A, B 출력하기</ol>
          <ol> 2. </ol>
          <ol> 3. </ol>
        </li>
      </div>
    </div>
  );
};

export default ProblemsPage;