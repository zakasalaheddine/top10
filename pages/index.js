import { useRouter } from "next/dist/client/router";
import Layout from "../modules/layout";
import HeaderImg from "../modules/layout/components/pages/home/HeaderImg";
export default function Home({ categories }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout categories={categories}>
      <HeaderImg />
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
