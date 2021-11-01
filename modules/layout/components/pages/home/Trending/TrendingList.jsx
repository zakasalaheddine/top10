import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Trending from "./Trending";
import { Btn } from "../HeaderImg";

const TrendingList = () => {
  const [allTrending, setAllTrending] = useState(false);
  const handleDisplay = () => {
    setAllTrending((prevState) => !prevState);
  };
  return (
    <Container w={["100%", "100%", "100%", "669px"]}>
      <Title as="h1" fontSize={["18px", "30px"]}>
        Top 10 Trending List
      </Title>
      {trendingList.map((trending, i) => {
        if (!allTrending && i > 4) return;
        return <Trending key={i} trending={trending} trendingNumber={i + 1} />;
      })}
      <Flex justify="center">
        <Btn onClick={handleDisplay}>See{allTrending ? " Less" : " More"}</Btn>
      </Flex>
    </Container>
  );
};
export default TrendingList;

//styled component
const Container = styled(Box)`
  width: 100%;
  margin-top: 50px;
`;

const Title = styled(Text)`
  font-weight: bold;
  margin-bottom: 32px;
`;

//dummy data
export const trendingList = [
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
  {
    title: "Dating Sites & Apps",
    mainPost: {
      title: "The 10 Best Dating Sites And Apps 2021",
      author: "Zidan",
      date: "September,2021",
    },
    posts: [
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
      {
        description:
          "10 Celebrities Who've Tried Finding Love On Dating Apps Just Like The Rest Of Us",
        author: "Zidan",
        date: "September",
      },
    ],
  },
];
