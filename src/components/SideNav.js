import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
import MenuItem from "../components/MenuItem";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  display: ${(props) => props.display};
  background: #ffffff;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); */
  /* border: 2px solid dodgerblue; */
`;

export default function SideNav() {
  const [isMenuOpen] = useContext(AppContext);

  function setDisplay(status) {
    if (status === false) {
      return "none";
    } else if (status === true) {
      return "block";
    }
  }

  let displayValue = setDisplay(isMenuOpen);

  return (
    <Container display={displayValue}>
      <MenuItem label={"Home"} />
      <MenuItem label={"About"} />
      <MenuItem label={"Projects"} />
      <MenuItem label={"Contact"} />
    </Container>
  );
}
