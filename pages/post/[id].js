import { Box } from "@chakra-ui/layout";
import Layout from "../../modules/layout";
import Items from "../../modules/layout/components/Post Items/Items";
import PostHeader from "../../modules/layout/components/PostHeader/PostHeader";
import Services from "../../modules/layout/components/Service Component/Services";
const SinglePost = () => {
  return (
    <Layout>
      <Box
        p={["20px 16px", "20px 30px", "20px 45px", "20px 100px", "20px 140px"]}
      >
        <PostHeader />
        <Services />
        <Items />
      </Box>
    </Layout>
  );
};

export default SinglePost;
