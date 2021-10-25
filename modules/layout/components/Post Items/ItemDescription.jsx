import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import TextIcon from "./TextIcon";
import styled from "@emotion/styled";

const ItemDescription = () => {
  return (
    <>
      <HR my="25px" w="50%" />
      <TextIcon icon={<BsCheck2 size="22px" />}>
        <Span>What’s in the box</Span> 3-5 mealsof 2 or 4 servings each
      </TextIcon>
      <TextIcon icon={<BsCheck2 size="22px" />}>
        <Span>What’s in the box</Span> 3-5 mealsof 2 or 4 servings each
      </TextIcon>
      <TextIcon icon={<BsCheck2 size="22px" />}>
        <Span>What’s in the box</Span> 3-5 mealsof 2 or 4 servings each
      </TextIcon>
      <Description fontSize={["md", "lg"]}>
        HelloFresh is one of the easiest and most convenient meal kit delivery
        services. With straightforward recipes and pre-portioned ingredients,
        all of its meals are done and dusted in 6 steps or less, allowing you to
        sit down and enjoy your dinner within 30 minutes. What’s more is that
        the convenience doesn’t end with the meals: HelloFresh’s website is
        extremely user-friendly, and modifying, cancelling or reactivating a
        subscription is as easy as pie. The diversity of meal plans may not be
        as great as other meal kit delivery services but the quality, ease and
        convenience of HelloFresh is second to none.
      </Description>
      <ConsProsContainer flexDir={["column", "column", "row"]}>
        <Box mr={["", "", "4%"]} w={["100%", "100%", "50%"]}>
          <Title>Pros</Title>
          <HR w="80%" />
          <Box mt={4}>
            <TextIcon icon={<BsCheck2 size="20px" />}>
              3-5 mealsof 2 or 4 servings each
            </TextIcon>
            <TextIcon icon={<BsCheck2 size="20px" />}>
              3-5 mealsof 2 or 4 servings each
            </TextIcon>
          </Box>
        </Box>

        <Box mt={2} w={["100%", "100%", "50%"]}>
          <Title>Cons</Title>
          <HR w="80%" />
          <Box mt={4}>
            <TextIcon icon={<MdOutlineClose size="20px" />}>
              3-5 mealsof 2 or 4 servings each
            </TextIcon>
            <TextIcon icon={<MdOutlineClose size="20px" />}>
              3-5 mealsof 2 or 4 servings each
            </TextIcon>
          </Box>
        </Box>
      </ConsProsContainer>
    </>
  );
};

export default ItemDescription;

export const HR = styled(Box)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;
const Span = styled.span`
  font-weight: bold;
`;
const Description = styled(Text)`
  text-align: justify;
  line-height: 30px;
`;
const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const ConsProsContainer = styled(Flex)`
  margin: 40px 0;
  justify-content: space-between;
`;
