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
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  align-items: center;
  div {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
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
