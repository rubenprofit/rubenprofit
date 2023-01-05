import { pick } from "contentlayer/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { allPosts, Post as PostType } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { SEO } from "@/components/SEO/SEO";
import { Layout } from "@/components/Layout/Layout";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MdxComponent = useMDXComponent(post.body.code);
  return (
    <>
      <SEO title={post.title} description={post.description} />
      <Layout>
        <div className="space-y-14">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">{post.title}</h1>
          </div>

          <div className="space-y-6">
            <MdxComponent components={{}} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: allPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const post = pick(
    allPosts.find(({ slug }) => slug === ctx.params?.slug) as PostType,
    ["title", "description", "body"]
  );

  return {
    props: { post },
  };
}
