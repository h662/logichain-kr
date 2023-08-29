"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

import partner from "@/public/images/partner.png";

const CompanyPartner: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="bg-white" id="companyDescription">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-4 md:px-16 items-start  text-center text-lg md:text-5xl font-semibold py-20 md:py-40">
        <div className="mb-8 md:mb-16">다양한 기업과 함께합니다</div>
        <Image src={partner} alt="partner" />
      </div>
    </div>
  );
};

export default CompanyPartner;
