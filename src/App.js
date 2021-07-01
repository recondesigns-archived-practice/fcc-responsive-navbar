import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  & > h1 {
    margin: 0px;
    text-align: center;
  }
`;
export default function App() {
  return (
    <div className="App">
      <AppContainer>
        <h1>{"App Component"}</h1>
      </AppContainer>
    </div>
  );
}
