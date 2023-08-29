import { FC } from "react";
import Image, { StaticImageData } from "next/image";

type Prop = {
  image: StaticImageData;
  name: string;
};

const BackgroundImage: FC<Prop> = ({ image, name }) => {
  return (
    <Image
      src={image}
      alt={name}
      placeholder="blur"
      quality={100}
      className="object-cover w-[100vw] -z-50"
      fill
    />
  );
};

export default BackgroundImage;
