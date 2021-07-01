import React from "react";
import styled from "styled-components";
import logoImg from "../assets/rando-logo.svg";
import menuIcon from "../assets/menu-icon.svg";

const Container = styled.header`
  padding: 32px 16px 16px 16px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
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
`;

export default function Header() {
  return (
    <Container>
      <LogoImage src={logoImg} alt={"logo image"} />
      <MenuIcon src={menuIcon} alt={"open menu"} />
    </Container>
  );
}