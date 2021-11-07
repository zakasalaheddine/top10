import { Box, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React from "react";
import ItemDescription from "./ItemDescription";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

const Items = ({ topics, postContent }) => {
  return (
    <Box mt="50px">
      <Title as="h1" fontSize={["xl", "2xl", "4xl"]}>
        {postContent}
      </Title>
      {topics.map((topic) => (
        <>
          <ItemHeader id={topic.id} logo={topic.logo.url} name={topic.name} />
          <ItemImage image={topic.images[0].url} href={topic.href} />
          <ItemDescription
            href={topic.href}
            description={topic.about}
            pros={topic.pros}
            cons={topic.cons}
          />
          <ItemFooter href={topic.href} />
        </>
      ))}
    </Box>
  );
};

export default Items;

const Title = styled(Text)`
  font-weight: bold;
`;
