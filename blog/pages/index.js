import { Layout } from "@components/Layout/Layout";
import { SEO } from "@components/SEO/SEO";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }) {
  const description = "Landing page";
  return (
    <>
      <SEO title="Home" description={description} />
      <Layout>
        <section className="flex items-center text-center h-full">
          <div className="m-3 p-3">
            <h1 className="text-xl">
              Welcome to my little corner of the internet.
            </h1>
            <br />
            <p className="font-sm">
              It's a work in progress so feel free to poke around and explore.
              If you have any feedback or just want to hit me up, the best
              method is via{" "}
              <a
                href="mailto:me@rubenprofit.com"
                className="underline underline-offset-4"
              >
                email
              </a>
              . Enjoy!
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
