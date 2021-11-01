import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Layout from "../modules/layout";
import HeaderImg from "../modules/layout/components/pages/home/HeaderImg";
import CategorieList from "../modules/layout/components/pages/home/Categories/CategorieList";
import TrendingList from "../modules/layout/components/pages/home/Trending/TrendingList";

export default function Home({ categories }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout categories={categories}>
      <HeaderImg />
      <Box px={["16px", "30px", "45px", "100px", "140px"]} py="50px">
        <CategorieList categories={categories} />
        <TrendingList />
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
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
