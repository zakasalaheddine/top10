import React from "react";
import styled from "@emotion/styled";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { HR } from "./ServiceHeader";
import Rating from "../../Rating/Rating";
import CustomButton from "../../UI/Button";

const Service = () => {
  return (
    <div>
      <TopPartContainer>
        <ServiceImage src="/images/Rectangle51.jpg" />
        <Text fontSize="2xl" mb="50px">
          Service Provider
        </Text>
        <CustomButton>Visit</CustomButton>
      </TopPartContainer>

      <BottomPartContainer>
        <RowsContainer>
          <Rating nbrStar={3.5} size="26" />
        </RowsContainer>
        <HR />
        <RowsContainer>
          <Text fontSize="22px">{4.5}</Text>
        </RowsContainer>
        <HR />
        <RowsContainer>
          <Text fontSize="22px">{3.5}</Text>
        </RowsContainer>
        <HR />
        <RowsContainer>
          <Text fontSize="22px">{`${3}%`}</Text>
        </RowsContainer>
      </BottomPartContainer>
    </div>
  );
};

export default Service;

const TopPartContainer = styled(Flex)`
  width: 240px;
  height: 500px;
  flex-direction: column;
  align-items: center;
`;
const BottomPartContainer = styled(Box)``;

const ServiceImage = styled(Image)`
  width: 212px;
  height: 274px;
  border-radius: 15px;
  margin-bottom: 40px;
`;

const RowsContainer = styled(Flex)`
  height: 80px;
  flex-shrink: 0;
  width: 240px;
  justify-content: center;
  align-items: center;
`;
