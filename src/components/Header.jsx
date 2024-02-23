import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import SignInModal from "./modals/SignInModal";
import Context from './contexts/Context';

const Header = () => {
    const {isSignedIn, userInfo} = useContext(Context);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const toggleSignInModal = () => {
      setShowSignInModal(!showSignInModal);
    };

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

          {isSignedIn && <div className="text-white fs-5 align-center"> Welcome. {userInfo.nickname} </div>}
          <Button style= {{"backgroundColor": "white", "color": "#082E5D"}} onClick={toggleSignInModal} className="ms-auto fs-6"> Sign In </Button>

      </Navbar>
    <SignInModal showSignInModal={showSignInModal} toggleSignInModal={toggleSignInModal}/>
    </div>
  )
};

export default Header;