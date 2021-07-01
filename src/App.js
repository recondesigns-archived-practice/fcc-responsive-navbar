import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <SideNav />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/projects"} component={ProjectsPage} />
        <Route path={"/contact"} component={ContactPage} />
      </Switch>
    </Container>
  );
}
