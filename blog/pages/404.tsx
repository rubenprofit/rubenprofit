import { Layout } from "@/components/Layout/Layout";
import { SEO } from "@/components/SEO/SEO";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" is404 />
      <Layout>
        <section>
          <div className="text-center text-white m-3 p-3">
            <h1 className="text-lg font-bold">Error 404</h1>
            <p>
              Looks like theres nothing here. Click the button below to redirect
              home.
            </p>
            <br />
            <Link
              className="rounded-lg bg-black px-4 py-2 font-small text-white-10"
              href="/"
            >
              Go Home
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
