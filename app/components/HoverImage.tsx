import { FC, useState } from "react";
import Link from "next-intl/link";
import Image, { StaticImageData } from "next/image";

type Prop = {
  name: string;
  image: StaticImageData;
};

const HoverImage: FC<Prop> = ({ name, image }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link
      href="/product"
      className="hover:bg-black hover:bg-opacity-30 duration-500 relative"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image className="hover:opacity-30 duration-500" src={image} alt={name} />
      <div
        className={`${
          isHover
            ? "bg-black rounded-lg text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 "
            : "hidden"
        }`}
      >
        더보기
      </div>
    </Link>
  );
};

export default HoverImage;
