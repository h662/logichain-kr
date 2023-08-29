"use client";

import Image from "next/image";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { useObserve } from "@/app/lib/client";
import BackgroundImage from "@/app/components/BackgroundImage";
import ProductNavigationButton from "@/app/components/product/ProductNavigationButton";
import background4 from "@/public/images/background4.png";
import DeepIdAi from "@/app/components/DeepIdAi";
import ai1 from "@/public/images/ai1.png";
import ai2 from "@/public/images/ai2.png";
import ai3 from "@/public/images/ai3.png";
import ai4 from "@/public/images/ai4.png";

const Ai: FC = () => {
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
          <DeepIdAi />
        </div>
        <div className="bg-white w-[100vw] left-0 min-h-screen">
          <ProductNavigationButton />
          <div className="max-w-screen-xl mx-auto">
            <div className="mt-4 mx-2 md:mt-16 md:mx-4 text-base md:text-4xl font-medium">
              {t("ai1")}, <span className="text-blue-600">DeepID</span> AI
            </div>
            <div className="mt-4 md:mt-32 flex flex-col justify-center items-center">
              <Image src={ai1} alt="ai1" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("ai2")}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <Image className="py-20 md:py-40 px-4" src={ai2} alt="ai2" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("ai3")}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <Image src={ai3} alt="ai2" />
              <div className="mx-2 md:mx-4 text-lg md:text-3xl font-medium bg-blue-600 w-full text-center py-4 text-white">
                {t("ai4")}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image className="py-20 md:py-40 px-4" src={ai4} alt="ai4" />
            </div>
          </div>
        </div>
      </div>
      <BackgroundImage image={background4} name="Background" />
    </div>
  );
};

export default Ai;
