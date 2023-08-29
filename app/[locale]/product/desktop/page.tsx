"use client";

import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { useObserve } from "@/app/lib/client";
import BackgroundImage from "@/app/components/BackgroundImage";
import ProductNavigationButton from "@/app/components/product/ProductNavigationButton";
import background3 from "@/public/images/background3.png";
import product1 from "@/public/images/product1.png";
import product3 from "@/public/images/product3.png";
import DeepIdAi from "@/app/components/DeepIdAi";
import product2 from "@/public/images/product2.png";
import desktop1 from "@/public/images/desktop1.jpeg";
import desktop2 from "@/public/images/desktop2.png";
import desktop3 from "@/public/images/desktop3.png";
import desktop4 from "@/public/images/desktop4.png";

const Desktop: FC = () => {
  const { dom, isObserved } = useObserve();

  const t = useTranslations("Index");

  return (
    <div>
      <div className={"flex flex-col items-center"}>
        <div
          ref={dom}
          className={`py-20 ${
            isObserved && "animate__animated animate__fadeIn animate__slow"
          }`}
        >
          <Image
            className="z-10 w-48 md:w-96 mb-4 md:mb-8 rounded-xl shadow-lg bg-white shadow-gray-500"
            src={product2}
            alt="deep-id desktop"
          />
        </div>
        <div className="bg-white w-[100vw] left-0 min-h-screen">
          <ProductNavigationButton />
          <div className="max-w-screen-xl mx-auto">
            <div className="mt-4 mx-2 md:mt-16 md:mx-4 text-base md:text-4xl font-medium">
              {t("desktop1")}, <span className="text-blue-600">DeepID</span>{" "}
              Desktop
            </div>
            <div className="mt-4 md:mt-24 flex flex-col md:flex-row justify-center items-center">
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium">
                <span className="text-red-500">{t("desktop2")}</span>
              </div>
              <Image className="w-[48rem]" src={desktop1} alt="Problem" />
            </div>
            <div className="mt-4 md:mt-32 flex flex-col md:flex-row-reverse justify-center items-center">
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium">
                <span className="text-red-500">{t("desktop3")}</span>
              </div>
              <Image className="w-[48rem]" src={desktop2} alt="Problem" />
            </div>
            <div className="mt-8 md:mt-32 flex flex-col justify-center items-center">
              <div className="mx-2 md:mx-4 text-xl md:text-6xl font-medium">
                <span className="text-blue-600">DeepID</span> {t("desktop4")}
              </div>
              <div className="p-4">
                <Image
                  className="w-[32rem] md:mt-4 rounded-xl"
                  src={product2}
                  alt="desktop"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-32 flex flex-col justify-center items-center">
              <Image src={desktop3} alt="Dollar Datail" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("desktop5")}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image src={desktop4} alt="product1" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("desktop6")}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:pt-32">
              <DeepIdAi />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white md:mt-32">
                {t("mobile7")}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={product3} alt="product3" />
            </div>
          </div>
        </div>
      </div>
      <BackgroundImage image={background3} name="Background" />
    </div>
  );
};

export default Desktop;
