"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const HomeDeepIdAi: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className=" bg-gray-900 text-center text-base md:text-3xl font-semibold py-40 md:py-80 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-10 md:mb-20 text-2xl md:text-6xl">{t("desc6")}</div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <div className="border-4 p-4 grow w-full">{t("desc7")}</div>
          <div className="border-4 p-4 grow w-full">{t("desc8")}</div>
          <div className="border-4 p-4 grow w-full">{t("desc9")}</div>
          <div className="border-4 p-4 grow w-full">{t("desc10")}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeDeepIdAi;
