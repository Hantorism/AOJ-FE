import React, { useEffect, useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import SignInModal from "./modals/SignInModal";

const Header = () => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const toggleSignInModal = () => {
      setShowSignInModal(!showSignInModal);
    };

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
    <div id="header">
      <Navbar style= {{"backgroundColor": "#082E5D"}}> 
        <NavbarBrand className="text-white fs-5" href="/">
          Home
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="text-white fs-5" href="/problems"> Problems </NavLink>  
          </NavItem>

          <NavItem>
            <NavLink className="text-white fs-5" href="/"> About </NavLink>  
          </NavItem>
        </Nav>
        {/*
        true && true => true
        true && false => false
        false && true => false
        false && false => false

        true || true => true
        true || false => true
        false || true => true
        false || false => false
        */}

        {isSignedIn && <div className="text-white"> Welcome. </div>}
        
        <Button style= {{"backgroundColor": "white", "color": "#082E5D"}} onClick={toggleSignInModal} className="ms-auto fs-6"> Sign In </Button>
      </Navbar>
    <SignInModal showSignInModal={showSignInModal} toggleSignInModal={toggleSignInModal} setIsSignedIn={setIsSignedIn} />
    </div>
  )
};

export default Header;