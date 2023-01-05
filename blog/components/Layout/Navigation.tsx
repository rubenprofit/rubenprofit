import Link from "next/link";
import { Avatar } from "@components/Avatar/Avatar";
import { getSiteMetaData } from "@utils/helpers";

export const Navigation = ({ isRoot }) => {
  const { title, author } = getSiteMetaData();

  return (
    <header className="relative flex items-center max-h-24 col-span-2 justify-between m-3 p-7 rounded-xl shadow-lg bg-neutral-800">
      <div className="flex items-center">
        <Link href="/">
          <Avatar src="/images/me.png" alt={`${author} avatar image`} />
        </Link>
      </div>

      <nav className="grid grid-cols-3 gap-3 text-center text-white">
        <Link href="/about" className="hover:underline col-span-1">
          About
        </Link>
        <Link href="/blog" className="hover:underline col-span-1">
          Blog
        </Link>
        <Link href="/other/resume.pdf" className="hover:underline col-span-1">
          Resume
        </Link>
      </nav>
    </header>
  );
};
