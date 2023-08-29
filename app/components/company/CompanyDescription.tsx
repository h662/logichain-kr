"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const CompanyDescription: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="bg-white max-w-screen-xl mx-auto" id="companyDescription">
      <div className="flex flex-col justify-center px-4 md:px-16 items-start gap-8 md:gap-16 text-center text-lg md:text-5xl font-semibold py-40 md:py-80">
        <div>{t("company2")}</div>
        <div>{t("company3")}</div>
        <div>{t("company4")}</div>
      </div>
    </div>
  );
};

export default CompanyDescription;
