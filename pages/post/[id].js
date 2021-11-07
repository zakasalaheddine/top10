import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Layout from "../../modules/layout";
import Items from "../../modules/layout/components/Post Items/Items";
import PostHeader from "../../modules/layout/components/PostHeader/PostHeader";
import Services from "../../modules/layout/components/Service Component/Services";
const SinglePost = ({ categories, post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout categories={categories}>
      <Box
        p={["20px 16px", "20px 30px", "20px 45px", "20px 100px", "20px 140px"]}
      >
        <PostHeader title={post.title} />
        <Services topics={post.topics} />
        <Items topics={post.topics} postContent={post.content} />
      </Box>
    </Layout>
  );
};

export async function getStaticPaths() {
  const fatchPosts = await fetch("https://api-top10.zakadev.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query{
        posts{
          id
        }
      } 
      `,
    }),
  });
  const postsData = await fatchPosts.json();
  const posts = postsData.data.posts;
  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const fatchCategories = await fetch("https://api-top10.zakadev.com/graphql", {
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
  const CategoriesData = await fatchCategories.json();
  const categories = CategoriesData.data.categories;

  const fatchPost = await fetch("https://api-top10.zakadev.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query{
        posts(where:{id:${id}}){
          id
          title
          slug
          content
          image{
            url
          }
          topics{
            id
            name
            href
            about
            logo{
              url
            }
            images{
              url
            }
            features{
              id
              key
              value
            }
            pros{
              id
              value
            }
            cons{
              id
              value
            }
          }
        }

      } 
      `,
    }),
  });
  const PostData = await fatchPost.json();
  const post = PostData.data.posts[0];
  return { props: { categories, post }, revalidate: 86400 };
};

export default SinglePost;
