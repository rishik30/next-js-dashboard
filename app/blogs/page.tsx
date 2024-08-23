import { GetStaticProps } from "next";
import { getAllPostsForHome } from "@/app/lib/api";
import HeroPost from "../ui/blogs/hero-post";
import MoreStories from "../ui/blogs/more-stories";

const DEFAULT_PREVIEW = false

export default async function Page() {
  const {edges} = await getAllPostsForHome(DEFAULT_PREVIEW)
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <div>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  )
}