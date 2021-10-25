import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CustomButton = ({ children, bgColor }) => {
  const [displayIcon, setDisplayIcon] = useState(false);
  const handleIconDisplay = () => {
    setDisplayIcon((prevState) => !prevState);
  };
  return (
    <Btn
      onMouseEnter={handleIconDisplay}
      onMouseLeave={handleIconDisplay}
      bgColor={bgColor}
    >
      {children}
      {displayIcon && (
        <Icon>
          <BsFillArrowRightCircleFill size="22px" color="#FFF" />
        </Icon>
      )}
    </Btn>
  );
};

export default CustomButton;

const Btn = styled(Button)`
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  color: #fff;
  border-radius: 8px;
  padding: 22px 0;
  width: 163px;
  background-color: ${({ bgColor }) => bgColor || "#01036a"};
  transition: padding 0.5s;
  position: relative;
  &:hover {
    padding-right: 25px;
    background-color: ${({ bgColor }) => (bgColor ? "#FF5428" : "#01036a")};
  }
  @media (max-width: 500px) {
    font-size: 16px;
    width: 140px;
  }
`;

const Icon = styled(Box)`
  position: absolute;
  right: 24px;
  top: 24%;
  @media (max-width: 500px) {
    right: 16px;
  }
`;
