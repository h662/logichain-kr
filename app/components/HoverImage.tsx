import { FC, useState } from "react";
import Link from "next-intl/link";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

type Prop = {
  name: string;
  image: StaticImageData;
  href: string;
};

const HoverImage: FC<Prop> = ({ name, image, href }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const t = useTranslations("Index");

  return (
    <Link
      href={href}
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
        {t("view")}
      </div>
    </Link>
  );
};

export default HoverImage;
