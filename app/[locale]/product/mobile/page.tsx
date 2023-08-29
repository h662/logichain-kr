"use client";

import Image from "next/image";
import { FC } from "react";

import mobile1 from "@/public/images/mobile1.png";
import { useObserve } from "@/app/lib/client";
import BackgroundImage from "@/app/components/BackgroundImage";
import background2 from "@/public/images/background2.png";
import problem1 from "@/public/images/problem1.jpeg";
import problem2 from "@/public/images/problem2.png";
import spectrum from "@/public/images/spectrum.jpeg";
import product1 from "@/public/images/product1.png";
import DeepIdAi from "@/app/components/DeepIdAi";
import product3 from "@/public/images/product3.png";
import ProductNavigationButton from "@/app/components/product/ProductNavigationButton";
import { useTranslations } from "next-intl";

const Mobile: FC = () => {
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
            className="z-10 w-48 md:w-96 mb-4 md:mb-8 rounded-xl shadow-lg shadow-gray-500"
            src={mobile1}
            alt="deep-id mobile"
          />
        </div>
        <div className="bg-white w-[100vw] left-0 min-h-screen">
          <ProductNavigationButton />
          <div className="max-w-screen-xl mx-auto">
            <div className="mt-4 mx-2 md:mt-16 md:mx-4 text-base md:text-4xl font-medium">
              {t("mobile1")}, <span className="text-blue-600">DeepID</span>{" "}
              Mobile
            </div>
            <div className="mt-4 md:mt-24 flex flex-col md:flex-row justify-center items-center">
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium">
                <span className="text-red-500">{t("mobile2")}</span>
              </div>
              <Image className="w-[48rem]" src={problem1} alt="Problem" />
            </div>
            <div className="mt-4 md:mt-32 flex flex-col md:flex-row-reverse justify-center items-center">
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium">
                <span className="text-red-500">{t("mobile3")}</span>
              </div>
              <Image className="w-[48rem]" src={problem2} alt="Problem" />
            </div>
            <div className="mt-8 md:mt-32 flex flex-col justify-center items-center">
              <div className="mx-2 md:mx-4 text-xl md:text-6xl font-medium">
                <span className="text-blue-600">DeepID</span> {t("mobile4")}
              </div>
              <div className="p-4">
                <Image
                  className="w-[32rem] md:mt-4 rounded-xl"
                  src={mobile1}
                  alt="Problem"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-32 flex flex-col justify-center items-center">
              <Image src={spectrum} alt="Spectrum" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("mobile5")}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <Image src={product1} alt="product1" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("mobile6")}
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
      <BackgroundImage image={background2} name="Background" />
    </div>
  );
};

export default Mobile;
