import React, { ReactElement, useEffect, useState, useContext } from "react";
import LoadUserInfo from "../../utils/LoadUserInfo";
import "./ProblemPage.css"

const ProblemsPage = ({columns, data}) => {
  LoadUserInfo();
  
    return (
    <div class=" text-white" >
      <div class="problemTitle">
        <div class="title"> Title </div>
        <div class="title_list">
          <a href="/"> [기초] A, B 출력하기</a> <br/>
          <a href="/"> [기초] A, B 출력하기</a>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;