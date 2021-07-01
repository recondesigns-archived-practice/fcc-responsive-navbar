import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
`;

const Label = styled.p`
  padding: 16px 16px 16px 16px;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #414141;
  opacity: 0.6;

  &:hover {
    font-weight: 600;
    opacity: 0.8;
  }
`;

export default function MenuItem(props) {
  const { label, onclick } = props;
  return (
    <Container onClick={onclick}>
      <Label>{label}</Label>
    </Container>
  );
}
