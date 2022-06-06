import styled from "styled-components";

export const Header = styled.div`
  width: 80%;
  align-items: center;
  z-index: 1;
  margin: auto;
  background: ${(props) => props.theme.body};
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
  padding-left: 1rem;
  padding-right: 1rem;
  @media only screen and (max-width: 520px) {
    width: 90%;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 2rem;
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: none;
  @media only screen and (max-width: 520px) {
    display: block;
  }
`;

export const Items = styled.div`
  display: flex;
  width: 12rem;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
export const Item = styled.div`
  ::active {
    color: green;
  }
`;

export const Active = styled.b`
  color: ${(props) => props.theme.activeColor};
`;

export const Noactive = styled.div`
  color: ${(props) => props.theme.noActiveColor};
`;

export const SlideBar = styled.div`
  display: none;
  @media only screen and (max-width: 520px) {
    display: block;
    position: absolute;
    background: ${(props) => props.theme.descriptionBackground};
    right: 0;
    padding: 2rem;
    border-radius: 0.2rem;
    transition: right 0.5s ease-in;
    width: 10rem;
    height: 100vh;
    div {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const SidebarItem = styled.div``;
