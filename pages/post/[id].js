import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Layout from "../../modules/layout";
import Items from "../../modules/layout/components/Post Items/Items";
import PostHeader from "../../modules/layout/components/PostHeader/PostHeader";
import Services from "../../modules/layout/components/Service Component/Services";
const SinglePost = ({ categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout categories={categories}>
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const fatchData = await fetch("https://api-top10.zakadev.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query{
        categories{
          id
          name
          description
          icon{
            url
          }
        }
      } 
      `,
    }),
  });
  const data = await fatchData.json();
  const categories = data.data.categories;
  return { props: { categories }, revalidate: 86400 };
};

export default SinglePost;
