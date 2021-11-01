import styled from "@emotion/styled";
import { Box, Flex, Grid, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Card from "../../../Card/Card";
import Post from "./Post";
import PostAuther from "./PostAuther";

const Trending = ({ trending, trendingNumber }) => {
  return (
    <Card icon={trendingNumber} itemType="post" title={trending.title}>
      <DetailsContainer>
        <TopPart flexDir={["column", "column", "row"]}>
          <Img
            src="https://bit.ly/sage-adebayo"
            mr={["0", "0", "33px"]}
            mb={["12px", "12px", "0"]}
          />
          <Box>
            <Title
              fontSize={["18px", "22px"]}
              align={["center", "center", "start"]}
              mb={[2, 2, "19px"]}
            >
              {trending.mainPost.title}
            </Title>
            <PostAuther
              author={trending.mainPost.author}
              date={trending.mainPost.date}
            />
          </Box>
        </TopPart>
        <BottomPart>
          {trending.posts.map((post, i) => {
            return <Post key={i} post={post} />;
          })}
        </BottomPart>
      </DetailsContainer>
    </Card>
  );
};

export default Trending;

//styled component
const DetailsContainer = styled(Box)`
  width: 100%;
  margin-bottom: 12px;
`;
const TopPart = styled(Flex)`
  align-items: center;
  margin-bottom: 12px;
`;
const Img = styled(Image)`
  width: 280px;
  height: 120px;
  border-radius: 15px;
`;
const Title = styled(Link)`
  font-weight: bold;
  line-height: 27px;
  display: block;
  &:hover {
    text-decoration: none;
  }
`;
const BottomPart = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
`;
