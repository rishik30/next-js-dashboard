import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../lib/api";
import Layout from "../ui/blogs/layout";
import Container from "../ui/blogs/container";
import Header from "../ui/blogs/header";
import PostTitle from "../ui/blogs/post-title";
import PostHeader from "../ui/blogs/post-header";
import PostBody from "../ui/blogs/post-body";
import Tags from "../ui/blogs/tags";
import SectionSeparator from "../ui/blogs/section-separator";
import MoreStories from "../ui/blogs/more-stories";
import { BasePostProps } from "../lib/definitions";

export default async function Post({params}: {params: {slug: string}}) {
  const {posts, post} = await getPostAndMorePosts(params?.slug, false)
  const morePosts = posts?.edges;

  return (
    <Layout>
      <Container>
        <Header />
        {false ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug();

  return allPosts.edges.map(({ node }: {node: BasePostProps}) => ({slug: `/${node.slug}`})) || []
};
