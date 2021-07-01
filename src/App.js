import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import PageEl from "./components/PageEl";

const Container = styled.div`
  height: 100vh;
  border: 2px solid lightcoral;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <PageEl />
    </Container>
  );
}
