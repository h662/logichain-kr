import { FC } from "react";
import Image from "next/image";
import background from "../../public/images/background.png";

const Background: FC = () => {
  return (
    <Image
      src={background}
      alt="background"
      placeholder="blur"
      quality={100}
      className="object-cover w-[100vw] -z-50"
      fill
    />
  );
};

export default Background;
