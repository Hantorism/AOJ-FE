import React, { useEffect, useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
    return (
    <div id="header">
      <Navbar style={{"background-color": "#082E5D"}}> 
        <NavbarBrand className="text-white fs-6" href="/"> Home </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="text-white fs-6" href="/problems"> Problems </NavLink>  
          </NavItem>

          <NavItem>
            <NavLink className="text-white fs-6" href="/"> About </NavLink>  
          </NavItem>
        </Nav>

        <Button className="ms-auto fs-6"> Sign In </Button>
      </Navbar>
    </div>
  )
};

export default Header;