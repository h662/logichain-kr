"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const CompanyOverview: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="bg-blue-100" id="companyDescription">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-4 md:px-16 items-start  text-center text-lg md:text-5xl font-semibold py-20 md:py-40">
        <div>2023</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>{t("company5")}</li>
          <li>{t("company6")}</li>
          <li>{t("company7")}</li>
          <li>{t("company8")}</li>
          <li>{t("company9")}</li>
          <li>{t("company10")}</li>
        </ol>
        <div>2022</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>{t("company11")}</li>
          <li>{t("company12")}</li>
          <li>{t("company13")}</li>
          <li>{t("company14")}</li>
          <li>{t("company15")}</li>
          <li>{t("company16")}</li>
          <li>{t("company17")}</li>
        </ol>
        <div>2021</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>{t("company18")}</li>
          <li>{t("company19")}</li>
        </ol>
        <div>2020</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>{t("company20")}</li>
          <li>{t("company21")}</li>
        </ol>
        <div>{t("company22")}</div>
        <div className="mt-4 md:mt-8 font-normal">{t("company23")}</div>
      </div>
    </div>
  );
};

export default CompanyOverview;
