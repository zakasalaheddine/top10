import React from "react";
import styled from "@emotion/styled";
import { Image } from "@chakra-ui/image";
import { AspectRatio, Flex } from "@chakra-ui/layout";
import CustomButton from "../UI/Button";

const ItemFooter = ({ href }) => {
  return (
    <ItemFooterContainer
      p={["", "16px", "20px 30px"]}
      display={["none", "flex"]}
    >
      <AspectRatio w={["100px", "100px", "130px"]} ratio={16 / 6}>
        <Image src="/images/ItemLogo.png" />
      </AspectRatio>
      <CustomButton href={href} bgColor="primary">
        View Plan
      </CustomButton>
    </ItemFooterContainer>
  );
};

export default ItemFooter;

const ItemFooterContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: rgba(196, 196, 196, 0.4);
`;
