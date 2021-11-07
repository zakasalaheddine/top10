import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import TextIcon from "./TextIcon";
import styled from "@emotion/styled";
import CustomButton from "../UI/Button";

const ItemDescription = ({ href, description, pros, cons }) => {
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
      <Description fontSize={["md", "lg"]}>{description}</Description>
      <ConsProsContainer flexDir={["column", "column", "row"]}>
        <Box mr={["", "", "4%"]} w={["100%", "100%", "50%"]}>
          <Title>Pros</Title>
          <HR w="80%" />
          <Box mt={4}>
            {pros.map((prop) => (
              <TextIcon icon={<BsCheck2 size="20px" />}>{prop.value} </TextIcon>
            ))}
          </Box>
        </Box>

        <Box mt={2} w={["100%", "100%", "50%"]}>
          <Title>Cons</Title>
          <HR w="80%" />
          <Box mt={4}>
            {cons.map((con) => (
              <TextIcon icon={<MdOutlineClose size="20px" />}>
                {con.value}
              </TextIcon>
            ))}
          </Box>
        </Box>
      </ConsProsContainer>
      <Box display={["block", "none"]}>
        <CustomButton href={href} w="100%" bgColor="primary">
          View Plan
        </CustomButton>
      </Box>
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
