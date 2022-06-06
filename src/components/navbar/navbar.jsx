import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Header,
  Nav,
  Logo,
  Items,
  Item,
  Active,
  Noactive,
  Menu,
  SlideBar,
} from "./styled";
import Element from "../element";

const Navbar = (props) => {
  const history = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [showSlideBar, setShowSlideBar] = useState(false);
  return (
    <Header>
      <Nav>
        <Logo onClick={() => (window.location.href = "/")}>Saurabh</Logo>
        <Menu>
          {props.theme === "light" ? (
            <>
              <img
                src={Element.menu}
                alt="menu"
                height="36"
                width="36"
                onClick={() => setShowSlideBar(!showSlideBar)}
              />
            </>
          ) : (
            <>
              <img
                src={Element.menuDark}
                alt="menuDark"
                height="36"
                width="36"
                onClick={() => setShowSlideBar(!showSlideBar)}
              />
            </>
          )}
        </Menu>
        <Items>
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
        </Items>
      </Nav>
      {showSlideBar ? (
        <SlideBar data-aos="fade-left" data-aos-duration="500">
          <Item
            onClick={() => {
              setShowSlideBar(!showSlideBar);
              history("/");
            }}
            style={{ cursor: "pointer" }}
          >
            {location.pathname === "/" ? (
              <Active>Work</Active>
            ) : (
              <Noactive>Work</Noactive>
            )}
          </Item>
          <Item
            onClick={() => {
              setShowSlideBar(!showSlideBar);
              history("/about");
            }}
            style={{ cursor: "pointer" }}
          >
            {location.pathname === "/about" ? (
              <Active>About</Active>
            ) : (
              <Noactive>About</Noactive>
            )}
          </Item>
          <Item>
            {props.theme === "light" ? (
              <div
                onClick={() => {
                  setShowSlideBar(!showSlideBar);
                  props.onToggle();
                }}
              >
                <img src={Element.mode} alt="light" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setShowSlideBar(!showSlideBar);
                  props.onToggle();
                }}
              >
                <img src={Element.modeDark} alt="dark" />
              </div>
            )}
          </Item>
        </SlideBar>
      ) : (
        <></>
      )}
    </Header>
  );
};

export default Navbar;
