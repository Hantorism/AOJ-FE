import React, { useState } from "react";
import LoadUserInfo from "../../utils/LoadUserInfo";
import "./ProblemPage.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
              단계
            </button>
            <button class="nav-link ProblemBtn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              그룹
            </button>
          </div>
        </nav>
        <div class="tab-content;" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="container ProblemContainer">
              <Container>
                <Row id="container_title">
                  <Col xs={1}>번호</Col>
                  <Col xs={1}>난이도</Col>
                  <Col xs={4}>문제</Col>
                </Row>

                <Row class="problem_container">
                  <Col xs={1}>1.</Col>
                  <Col xs={1}>하</Col>
                  <Col xs={4}>[기본] 입출력</Col>
                </Row>

                <Row class="problem_container">
                  <Col xs={1}>2.</Col>
                  <Col xs={1}>하</Col>
                  <Col xs={4}>[기본] 사칙연산</Col>
                </Row>
              </Container>
            </div>
          </div>

          <div class="tab-pane fade mb-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex align-items-start p-3"
                class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  그리디 알고리즘
                </div>
                <Badge bg="primary" pill>
                  5
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex align-items-start p-3"
                class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    동적 프로그래밍
                  </div>
                  DP 관련 문제풀이 모음입니다.
                </div>
                <Badge bg="primary" pill>
                  10
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
              className="d-flex align-items-start p-3"
              class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">자료구조</div>
                  자료구조 관련 문제풀이 모음입니다.
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </div>
          
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex align-items-start p-3"
                class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold"> c언어 기초 </div>
                  C언어 중간고사 대비 그룹입니다.
                  <div className="mt-2">
                    <Button variant="outline-secondary fs-6">Join</Button>{' '}
                    <Button variant="outline-secondary fs-6">Open</Button>{' '} 
                  </div>
                </div>
                <Badge bg="black" pill>
                  35 People
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex align-items-start p-3"
                class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    컴퓨터 구조 중간고사 대비
                  </div>
                  알고리즘 관련 문제 기재합니다.
                  <div className="mt-2">
                    <Button variant="outline-secondary fs-6">Join</Button>{' '}
                    <Button variant="outline-secondary fs-6">Open</Button>{' '} 
                  </div>
                </div>

                <Badge bg="black" pill>
                  10 People <br></br>
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
              className="d-flex align-items-start p-3"
              class="prob_list">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">JAVA 기초 그룹</div>
                  JAVA 기초 그룹입니다.
                  <div className="mt-2">
                    <Button variant="outline-secondary fs-6">Join</Button>{' '}
                    <Button variant="outline-secondary fs-6">Open</Button>{' '} 
                  </div>
                </div>
                <Badge bg="black" pill>
                  14 People
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProblemsPage;