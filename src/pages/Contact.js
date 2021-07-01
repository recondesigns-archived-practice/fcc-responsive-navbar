import React from "react";
import styled from "styled-components";

const Page = styled.div`
  padding-top: 120px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  text-align: center;
  color: #414141;
`;

export default function ContactPage() {
  return (
    <Page>
      <Title>Contact page</Title>
    </Page>
  );
}
