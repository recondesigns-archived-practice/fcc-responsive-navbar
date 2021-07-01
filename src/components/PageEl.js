import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid green; */
`;

const Title = styled.h1`
  /* border: 1px dashed green; */
`;

export default function PageEl() {
  return (
    <Main>
      <Title>Page component</Title>
    </Main>
  );
}
