import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SignInModal from "./modals/SignInModal";
import Context from './contexts/Context';

const StyledNavbar = styled.div`
  background-color: #082E5D;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const NavbarBrand = styled.a`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  padding-right: 1rem;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  padding: 0 1rem;
`;

const NavLink = styled.a`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  background-color: white;
  color: #082E5D;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  border: none;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Header = () => {
    const { isSignedIn, userInfo } = useContext(Context);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const toggleSignInModal = () => {
      setShowSignInModal(!showSignInModal);
    };

    return (
    <div id="header">
      <StyledNavbar>
        <NavbarBrand href="/">
          Ajou Online Judge
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/problems">Problems</NavLink>  
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>  
          </NavItem>
        </Nav>
        <SignInButton onClick={toggleSignInModal}>Sign In</SignInButton>
      </StyledNavbar>
      <SignInModal showSignInModal={showSignInModal} toggleSignInModal={toggleSignInModal} />
    </div>
  );
};

export default Header;