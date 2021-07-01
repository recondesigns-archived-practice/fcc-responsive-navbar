import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";
import logoImg from "../assets/rando-logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import linkedInIcon from "../assets/linkedin-icon.svg";
import figmaIcon from "../assets/figma-icon.svg";
import sketchIcon from "../assets/sketch-icon.svg";
import portfolioIcon from "../assets/portfolio-icon.svg";

const Container = styled.header`
  position: relative;
  padding: 32px 16px 16px 16px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */

  @media (min-width: 800px) {
    padding-left: 40px;
    padding-right: 40px;
    /* padding: 0px 40px 0px 40px; */
  }
`;

const LogoImage = styled.img`
  width: 148px;
  height: 28px;
  /* border: 1px dashed green; */
`;

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  /* border: 1px dashed green; */

  @media (min-width: 800px) {
    display: none;
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  left: calc(50% - 400px / 2);
  width: 400px;
  display: none;
  justify-content: space-between;
  /* border: 1px solid dodgerblue; */

  @media (min-width: 800px) {
    display: flex;
  }
`;

const Link = styled.p`
  width: 88px;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #49a6e9;
  opacity: 0.6;
  cursor: pointer;
  /* border: 1px dashed green; */

  &:hover {
    /* font-weight: 400; */
    opacity: 1;
  }
`;

const SocialWrapper = styled.div`
  display: none;
  /* border: 1px solid dodgerblue; */

  @media (min-width: 800px) {
    display: flex;
  }
`;

const SocialIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  opacity: 0.6;
  /* border: 1px dashed green; */

  &:hover {
    opacity: 1;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useContext(AppContext);

  function openMenu(state, setter) {
    if (state === false) {
      setter(() => true);
    } else if (state === true) {
      setter(() => false);
    }
  }

  return (
    <Container>
      <LogoImage src={logoImg} alt={"logo image"} />
      <LinksWrapper>
        <Link>{"Home"}</Link>
        <Link>{"About"}</Link>
        <Link>{"Projects"}</Link>
        <Link>{"Contact"}</Link>
      </LinksWrapper>
      <SocialWrapper>
        <SocialIcon src={linkedInIcon} alt={"View my LinkedIn profile"} />
        <SocialIcon src={portfolioIcon} alt={"View my portfolio site"} />
        <SocialIcon src={figmaIcon} alt={"View my Figma Community profile"} />
        <SocialIcon src={sketchIcon} alt={"View my Sketch profile"} />
      </SocialWrapper>
      <MenuIcon
        src={menuIcon}
        alt={"open menu"}
        onClick={() => openMenu(isMenuOpen, setIsMenuOpen)}
      />
    </Container>
  );
}
