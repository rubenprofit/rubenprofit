import { getSiteMetaData } from "@utils/helpers";

export const Footer = () => {
  const { description, sourceUrl } = getSiteMetaData();

  return (
    <footer className="col-span-2 flex flex-col justify-end text-center py-3">
      <p className="text-xs font-light text-white">
        {description} © {new Date().getFullYear()},{" "}
        <a href={sourceUrl} className="hover:underline">
          Source
        </a>
        .
      </p>
    </footer>
  );
};
