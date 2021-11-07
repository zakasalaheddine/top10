import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";

const ServiceHeader = () => {
  return (
    <ServiceHeaderContainer>
      <Title as="h1">The best service providers</Title>
      <P>Rating</P>
      <HR />
      <P>Expert Score</P>
      <HR />
      <P>Healthy</P>
      <HR />
      <P>Calorie Ratio</P>
    </ServiceHeaderContainer>
  );
};

export default ServiceHeader;

//styled components
const ServiceHeaderContainer = styled(Box)`
  width: 21%;
`;
const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  height: 500px;
  padding-top: 130px;
`;

const P = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const HR = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
`;
