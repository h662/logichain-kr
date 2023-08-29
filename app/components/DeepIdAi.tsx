import Image from "next/image";
import { FC } from "react";
import { HiCloud } from "react-icons/hi2";

import deepId from "@/public/images/deep-id.png";
import { useTranslations } from "next-intl";

const DeepIdAi: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="relative flex flex-col justify-center items-center md:px-4">
      <div className="text-[16rem] md:text-[24rem] text-blue-100">
        <HiCloud />
      </div>
      <div className="-mt-4 md:-mt-8 mb-8 font-bold md:text-2xl">
        {t("saas")}
      </div>
      <Image className="absolute px-4" src={deepId} alt="Deep-ID" />
    </div>
  );
};

export default DeepIdAi;
