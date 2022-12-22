import Head from "next/head";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Ruben Profit - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-xl">Coming soon...</p>
      </main>
    </div>
  );
}
