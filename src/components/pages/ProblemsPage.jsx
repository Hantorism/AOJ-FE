import React, { useState } from "react";
import LoadUserInfo from "../../utils/LoadUserInfo";
import "./ProblemPage.css";

const ProblemsPage = () => {
  LoadUserInfo();
    return (
    <div class=" text-white" >
      <div class="problemTitle">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active ProblemBtn" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              전체
            </button>
            <button class="nav-link ProblemBtn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              출처
            </button>
            <button class="nav-link ProblemBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              단계
            </button>
          </div>
        </nav>
        <div class="tab-content;" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="container ProblemContainer">
            <div class="row">
              <div class="col-sm ProblemList"> <b>문제</b>
              <hr/>
                <div> 1 </div>
                <div> 2 </div>
              </div>
              
              <div class="col-sm ProblemList"> <b>문제 제목</b>
              <hr/>
                <div> <a href="/ProblemDetailPage"> [기본] 입력 사칙연산 </a></div>
                <div> [기본] 출력 사칙연산 </div>
              </div>

              <div class="col-sm ProblemList"> <b>난이도</b>
              <hr/>
                <div> 하 </div>
                <div> 하 </div>
              </div>
            </div>
          </div>
          </div>

          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          </div>
          
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProblemsPage;