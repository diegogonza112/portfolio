import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header(){
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/blog"){
      navigate("/")
    }else {
      navigate("blog")
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <HeaderWrap>
      <Img src={require("../Static/images/logo.png")} alt="Personal Logo" />
      
      {isMobile ? (
        <>
          <HamburgerIcon onClick={toggleNav} className={isNavOpen ? "cross" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerIcon>
          {isNavOpen && (
            location.pathname === "/blog" ? (
              <MobileNav>
              <Navul>
                <NavItem>
                  <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                    Home
                  </Link>
                </NavItem>
              </Navul>
            </MobileNav>
            ):(
              <MobileNav>
              <Navul>
                <NavItem>
                  <Link to="section1" smooth={true} duration={500} onClick={toggleNav}>
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="section2" smooth={true} duration={500} onClick={toggleNav}>
                    Experience
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="blog" smooth={true} duration={500} onClick={handleClick}>
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="section3" smooth={true} duration={500} onClick={toggleNav}>
                    Contact
                  </Link>
                </NavItem>
              </Navul>
            </MobileNav>
            )
          )}
        </>
      ) : (
        location.pathname === "/blog" ? (
          <NavWrap>
          <Navul>
            <HomeWrap>
              <NavItem>
                <Link to="home" onClick={handleClick}>
                  Home
                </Link>
              </NavItem>
            </HomeWrap>
          </Navul>
        </NavWrap>
        ):(
          <NavWrap>
          <Navul>
            <NavItem>
              <Link to="section1" smooth={true} duration={500}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="section2" smooth={true} duration={500}>
                Experience
              </Link>
            </NavItem>
            <NavItem>
              <Link to="blog" onClick={handleClick}>
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="section3" smooth={true} duration={500}>
                Contact
              </Link>
            </NavItem>
          </Navul>
        </NavWrap>
        )
      )}
    </HeaderWrap>
  );
};

const crossStyle = `
  transform: rotate(45deg);
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: black;
    top: 50%;
    left: 0;
  }
  &:before {
    transform: rotate(90deg);
  }
  &:after {
    display: none;
  }
`;

const HomeWrap = styled.div `
margin-right: 50px;
`

const Navul = styled.ul`
  display: flex;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px;
  transition: transform 1s ease-in-out;

  :hover {
    transform: rotate(150deg);
  }
`;

const NavItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  margin: 30px;
  font-family: "Fira Code";
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
  margin-right: 5%;

  span {
    width: 100%;
    height: 3px;
    background-color: black;
    transition: all 0.3s;
  }

  &.cross span {
    ${crossStyle}
  }
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background-color: #859ec8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  ${Navul} {
    flex-direction: column;
  }

  ${NavItem} {
    margin: 15px;
  }
`;