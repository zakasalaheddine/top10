import { Box, Flex, Link } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React from "react";
import PostAuther from "./PostAuther";

const Post = ({ post }) => {
  return (
    <PostContianer>
      <HR />
      <LinkStyle align={["center", "start"]}>{post.description}</LinkStyle>
      <PostAuther author={post.author} date={post.date} />
    </PostContianer>
  );
};

export default Post;

const PostContianer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`;
const HR = styled(Box)`
  margin-bottom: 12px;
  border-bottom: 1.7px solid #c4c4c4;
`;
const LinkStyle = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 16px;
`;
