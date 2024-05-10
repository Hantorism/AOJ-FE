import React from 'react';
import styled from 'styled-components';
import LoadUserInfo from '../../utils/LoadUserInfo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const PageTitle = styled.div`
  color: white;
`;

const TabContent = styled.div`
  background-color: #333;
`;

const ProblemContainer = styled.div`
  padding: 3%;
  width: 50%;
`;

const StyledListGroupItem = styled(ListGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ProblemsPage = () => {
  LoadUserInfo();
  return (
    <PageTitle>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Button variant="link" className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">전체</Button>
          <Button variant="link" className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">단계</Button>
          <Button variant="link" className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">그룹</Button>
        </div>
    </PageTitle>
  );
};

export default ProblemsPage;
