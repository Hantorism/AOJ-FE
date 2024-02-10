import React, { useEffect, useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import SignInModal from "./modals/SignInModal";

const Header = () => {
    const [showSignInModal, setShowSignInModal] = useState(false);
    const toggleSignInModal = () => {
      setShowSignInModal(!showSignInModal);
    };

    return (
    <div id="header">
      <Navbar style= {{"background-color": "#082E5D"}}> 
        <NavbarBrand className="text-white fs-6" href="/"> Home </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="text-white fs-6" href="/problems"> Problems </NavLink>  
          </NavItem>

          <NavItem>
            <NavLink className="text-white fs-6" href="/"> About </NavLink>  
          </NavItem>
        </Nav>

        <Button onClick={toggleSignInModal} className="ms-auto fs-6"> Sign In </Button>
      </Navbar>
    <SignInModal showSignInModal={showSignInModal} toggleSignInModal={toggleSignInModal}></SignInModal>
    </div>
  )
};

export default Header;