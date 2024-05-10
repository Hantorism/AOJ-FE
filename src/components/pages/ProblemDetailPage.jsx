import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import LoadUserInfo from "../../utils/LoadUserInfo";

const GlobalStyles = createGlobalStyle`
  body {
    color: black;
  }
`;

const PdpContainer = styled.div`
  color: black;
`;

const ProblemDetailPage = () => {
  LoadUserInfo();
  alert("hi");
  return (
    <div>
      <nav>
          <div>nav</div>
      </nav>
    </div>
  );
};

export default ProblemDetailPage;
