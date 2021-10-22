import { Box } from "@chakra-ui/layout";
import Layout from "../modules/layout";
import PostHeader from "../modules/layout/components/PostHeader/PostHeader";

export default function Home() {
  return (
    <Layout>
      <Box
        p={["20px 16px", "20px 30px", "20px 45px", "20px 100px", "20px 140px"]}
      >
        <PostHeader />
      </Box>
    </Layout>
  );
}
