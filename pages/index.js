import { useRouter } from "next/dist/client/router";
import Layout from "../modules/layout";
export default function Home({ categories }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout categories={categories}>
      <h1>Home Page</h1>
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
