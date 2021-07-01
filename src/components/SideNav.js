import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
import { useHistory } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  display: ${(props) => props.display};
  background: #ffffff;
`;

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useContext(AppContext);
  let history = useHistory();

  function setDisplay(status) {
    if (status === false) {
      return "none";
    } else if (status === true) {
      return "block";
    }
  }

  function closeMenu(setter) {
    setter(() => false);
  }

  function handleClick(func, path) {
    func.push(path);
    closeMenu(setIsMenuOpen);
  }

  let displayValue = setDisplay(isMenuOpen);

  return (
    <Container display={displayValue}>
      <MenuItem label={"Home"} onclick={() => handleClick(history, "/")} />
      <MenuItem
        label={"About"}
        onclick={() => handleClick(history, "/about")}
      />
      <MenuItem
        label={"Projects"}
        onclick={() => handleClick(history, "/projects")}
      />
      <MenuItem
        label={"Contact"}
        onclick={() => handleClick(history, "/contact")}
      />
    </Container>
  );
}
