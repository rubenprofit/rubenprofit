import { getSiteMetaData } from "@/utils/helpers";
import Image, { type ImageProps } from "next/image";

export const Avatar = (props: ImageProps) => {
  const { author } = getSiteMetaData();
  return (
    <Image
      {...props}
      alt={`${author.name} Avatar`}
      height={0}
      width={50}
      className="rounded-full h-12 w-12 hover:scale-110"
    />
  );
};
