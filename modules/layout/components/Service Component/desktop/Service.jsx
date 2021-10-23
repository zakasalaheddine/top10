import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Image } from "@chakra-ui/image";
import { HR } from "./ServiceHeader";
import Rating from "../../Rating/Rating";

const Service = () => {
  const [displayIcon, setDisplayIcon] = useState(false);
  const handleIconDisplay = () => {
    setDisplayIcon((prevState) => !prevState);
  };
  return (
    <div>
      <TopPartContainer>
        <ServiceImage src="/images/Rectangle51.jpg" />
        <Text fontSize="2xl" mb="50px">
          Service Provider
        </Text>
        <Button
          onMouseEnter={handleIconDisplay}
          onMouseLeave={handleIconDisplay}
        >
          Visit
          {displayIcon && (
            <Icon>
              <BsFillArrowRightCircleFill size="25px" color="#FFF" />
            </Icon>
          )}
        </Button>
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
const Button = styled.button`
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
  color: #fff;
  border-radius: 8px;
  padding: 13px 0;
  width: 142px;
  background-color: #01036a;
  transition: padding 0.5s;
  position: relative;
  &:hover {
    padding-right: 25px;
  }
`;
const Icon = styled(Box)`
  position: absolute;
  right: 25px;
  top: 13px;
`;
const RowsContainer = styled(Flex)`
  height: 80px;
  flex-shrink: 0;
  width: 240px;
  justify-content: center;
  align-items: center;
`;
