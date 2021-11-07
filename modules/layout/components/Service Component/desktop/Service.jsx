import React from "react";
import styled from "@emotion/styled";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Rating from "../../Rating/Rating";
import CustomButton from "../../UI/Button";

const Service = ({ imgUrl, features, name, href }) => {
  return (
    <div>
      <TopPartContainer>
        <ServiceImage src={`https://api-top10.zakadev.com${imgUrl}`} />
        <Text fontSize="2xl" mb="50px">
          {name}
        </Text>
        <CustomButton href={href}>Visit</CustomButton>
      </TopPartContainer>

      <BottomPartContainer>
        <RowsContainer>
          <Rating nbrStar={features[0].value} size="26" />
        </RowsContainer>
        <RowsContainer>
          <Text fontSize="22px">{features[1].value}</Text>
        </RowsContainer>
        <RowsContainer>
          <Text fontSize="22px">{features[2].value}</Text>
        </RowsContainer>
        <RowsContainer>
          <Text fontSize="22px">{features[3].value}</Text>
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
