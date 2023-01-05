import { allPosts } from "contentlayer/generated";
import { Layout } from "@/components/Layout/Layout";
import { SEO } from "@/components/SEO/SEO";
import { getSiteMetaData } from "@/utils/helpers";
import { pick } from "contentlayer/client";
import { compareDesc, format } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

function Post({ title, description, slug, date }: Props["posts"][number]) {
  const published = format(new Date(date), "PPP");
  return (
    <li className="block w-full rounded-xl shadow-lg bg-neutral-700 px-4 py-3.5 hover:scale-105">
      <Link href={`/blog/${slug}`}>
        <h4 className="text-xl">{title}</h4>
        <p className="mt-4 text-sm">{description}</p>
        <p className="text-xs italic">{published}</p>
      </Link>
    </li>
  );
}

const Blog = ({ posts }: Props) => {
  const { description } = getSiteMetaData();
  return (
    <>
      <SEO title="Blog" description={description} />
      <Layout>
        <h1 className="text-xl mb-3">
          Here you'll find a collection of my thoughts and other content.
        </h1>

        <ul className="space-y-5 px-1 sm:px-0">
          {posts.map((props, i) => (
            <Post key={i} {...props} />
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Blog;

export function getStaticProps() {
  const posts = allPosts
    .map((post) => pick(post, ["title", "description", "date", "slug"]))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return {
    props: { posts },
  };
}
