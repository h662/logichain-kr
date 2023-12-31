"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import HoverImage from "@/app/components/HoverImage";
import { useObserve } from "@/app/lib/client";
import DeepIdAi from "@/app/components/DeepIdAi";

const HomeProductIntro: FC = () => {
  const { dom, isObserved } = useObserve();

  const t = useTranslations("Index");

  return (
    <div
      ref={dom}
      className={`max-w-screen-xl mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center ${
        isObserved && "animate__animated animate__fadeIn animate__slow"
      }`}
    >
      <div className="grow relative w-96 md:w-[60rem] md:flex flex-col-reverse mt-20 md:mt-0">
        <div className="text-center">
          <div className="text-blue-600 font-semibold md:text-2xl">
            Deep-ID Mobile
          </div>
          <div className="mt-2">{t("desc4")}</div>
        </div>
        <HoverImage image={product1} name="product1" href="/product/mobile" />
      </div>
      <div className="grow flex flex-col md:flex-row w-full justify-center items-center md:items-stretch">
        <div className="bg-blue-600 w-full rounded-b-2xl md:rounded-none text-center text-white py-2 md:p-4 md:text-2xl flex items-center justify-center">
          {t("solution1")}
        </div>
        <div className="flex flex-col justify-center items-center">
          <DeepIdAi />
          <Link
            className="bg-blue-200 px-4 md:px-8 py-2 md:py-4 md:text-2xl mb-4 rounded-xl hover:bg-blue-400 font-semibold"
            href="/product/ai"
          >
            {t("view")}
          </Link>
        </div>
        <div className="bg-blue-600 w-full rounded-t-2xl md:rounded-none text-center text-white py-2 md:p-4 md:text-2xl flex items-center justify-center">
          {t("solution2")}
        </div>
      </div>
      <div className="grow w-96 md:w-[60rem] mb-20 md:mb-0">
        <HoverImage image={product2} name="product2" href="/product/desktop" />
        <div className="text-center">
          <div className="text-blue-600 font-semibold md:text-2xl">
            Deep-ID Desktop
          </div>
          <div className="mt-2">{t("desc5")}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductIntro;
