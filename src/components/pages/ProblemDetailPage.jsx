import React, { useState } from "react";
import LoadUserInfo from "../../utils/LoadUserInfo";
import "./ProblemDetailPage.css";

const ProblemDetailPage = () => {
  LoadUserInfo();
  alert("hi");
    return (
    <div class="pdp">
      <div>
        <nav>
            <div>nav</div>
        </nav>
      </div>
    </div>
  );
};

export default ProblemDetailPage;