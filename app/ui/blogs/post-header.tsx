import Avatar from "./avatar";
import Date from "./date";
import PostTitle from "./post-title";
import { BasePostProps } from "@/app/lib/definitions";
import Categories from "./categories";

export default function PostHeader({
  title,
  date,
  author,
  categories,
}: Omit<BasePostProps, 'slug'> & {categories: {edges: {node: {name: string}}[]}}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
