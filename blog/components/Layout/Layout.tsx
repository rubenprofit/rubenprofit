import { useRouter } from "next/router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  return (
    <section className="grid grid-cols-2 grid-rows-6 h-screen mx-auto max-w-3xl text-white">
      <Navigation isRoot={isRoot} />
      <main className="col-span-2 row-span-4 m-auto max-w-xl p-3 h-full">
        {children}
      </main>
      <Footer />
    </section>
  );
};
