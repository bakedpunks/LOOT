import React from "react";
import { nav } from ".Navbar.elements";

const NavBar = () => {
  return (
    <>
      <Nav />
    </>
  );
};

export default NavBar;

// eslint-disable-next-line no-undef
const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
