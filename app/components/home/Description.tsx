"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const Description: FC = () => {
  const t = useTranslations("Index");

  return (
    <div
      className=" bg-gray-200 flex flex-col justify-center items-center gap-4 md:gap-8 text-center text-base md:text-3xl font-semibold py-40 md:py-80"
      id="description"
    >
      <div>{t("desc1")}</div>
      <div>{t("desc2")}</div>
      <div>{t("desc3")}</div>
    </div>
  );
};

export default Description;
