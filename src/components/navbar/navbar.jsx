import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header, Nav, Logo, Item, Active, Noactive } from "./styled";
import Element from "../element";

const Navbar = (props) => {
  const history = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Header>
      <Nav>
        <Logo onClick={() => (window.location.href = "/")}>Saurabh</Logo>
        <div
          style={{
            width: "12rem",
            justifyContent: "space-between",
            fontSize: "1.2rem",
            alignItems: "center",
          }}
        >
          <Item onClick={() => history("/")} style={{ cursor: "pointer" }}>
            {location.pathname === "/" ? (
              <Active>Work</Active>
            ) : (
              <Noactive>Work</Noactive>
            )}
          </Item>
          <Item onClick={() => history("/about")} style={{ cursor: "pointer" }}>
            {location.pathname === "/about" ? (
              <Active>About</Active>
            ) : (
              <Noactive>About</Noactive>
            )}
          </Item>
          <Item>
            {props.theme === "light" ? (
              <div onClick={() => props.onToggle()}>
                <img src={Element.mode} alt="light" />
              </div>
            ) : (
              <div onClick={() => props.onToggle()}>
                <img src={Element.modeDark} alt="dark" />
              </div>
            )}
          </Item>
        </div>
      </Nav>
    </Header>
  );
};

export default Navbar;
