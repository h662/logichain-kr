"use client";

import { HiChevronDown } from "react-icons/hi2";
import { Link as ScrollLink } from "react-scroll";
import { FC } from "react";

import { useObserve } from "@/app/lib/client";
import BackgroundImage from "@/app/components/BackgroundImage";
import background1 from "@/public/images/background1.png";
import { useTranslations } from "next-intl";

const CompanyIntro: FC = () => {
  const { dom, isObserved } = useObserve();

  const t = useTranslations("Index");

  return (
    <div>
      <div
        ref={dom}
        className={`min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center items-center ${
          isObserved && "animate__animated animate__fadeIn animate__slow"
        }`}
      >
        <div className="text-3xl md:text-8xl font-semibold bg-gray-500 bg-opacity-50 px-8 py-4 md:px-16 md:py-8 rounded-2xl">
          {t("company1")}
        </div>
        <div className="text-xl md:text-6xl font-semibold mt-8 md:mt-16">
          Forensic as a Service
        </div>
        <button className="absolute bottom-12 md:bottom-6 text-gray-400 text-4xl md:text-6xl hover:text-black duration-500 animate__animated animate__heartBeat animate__infinite">
          <ScrollLink
            to="companyDescription"
            spy={true}
            smooth={true}
            offset={-48}
          >
            <HiChevronDown />
          </ScrollLink>
        </button>
      </div>
      <BackgroundImage image={background1} name="Background" />
    </div>
  );
};

export default CompanyIntro;
