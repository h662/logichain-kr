"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const Footer: FC = () => {
  const t = useTranslations("Index");

  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-1 px-2 py-4 text-xs md:text-sm font-extralight">
        <div className="font-normal text-base md:text-xl">{t("company")}</div>
        <div>
          <span className="font-normal">{t("businessRegistrationNumber")}</span>{" "}
          139-87-00196 | <span className="font-normal">CEO</span> {t("ceo")}
        </div>
        <div>
          <span className="font-normal">HEAD OFFICE</span> {t("headOffice")}
        </div>
        <div>
          <span className="font-normal">SEOUL OFFICE</span> {t("seoulOffice")}
        </div>
        <div>
          <span className="font-normal">E-Mail</span> ken@logichain.kr
        </div>
      </div>
    </footer>
  );
};

export default Footer;
