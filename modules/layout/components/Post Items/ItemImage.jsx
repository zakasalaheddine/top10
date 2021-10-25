import React from "react";
import styled from "@emotion/styled";
import { AspectRatio, Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { BsArrowRight } from "react-icons/bs";
import CustomButton from "../UI/Button";

const ItemImage = () => {
  return (
    <>
      <ImageContainer ratio={16 / 9}>
        <Image src="/images/Rectangle 63.png" />
      </ImageContainer>
      <LinksContainer>
        <Box>
          <Text fontSize={["md", "lg"]} mb="7px">
            Convinient And Healthy meal
          </Text>
          <Link>
            <Flex align="center">
              <Text fontSize={["md", "lg"]} color="rgba(1, 3, 106, 0.6)" mr={3}>
                Read HelloFresh Review
              </Text>
              <BsArrowRight size="18px" />
            </Flex>
          </Link>
        </Box>
        <Box display={["none", "block"]}>
          <CustomButton bgColor="primary">View Plan</CustomButton>
        </Box>
      </LinksContainer>
    </>
  );
};

export default ItemImage;

const ImageContainer = styled(AspectRatio)`
  max-height: 629px;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
`;
const LinksContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
