"use client";

import { FC } from "react";
import Image from "next/image";
import { HiCloud } from "react-icons/hi2";

import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import deepId from "@/public/images/deep-id.png";
import HoverImage from "../HoverImage";
import { useTranslations } from "next-intl";
import { useObserve } from "@/app/lib/client";

const ProductIntro: FC = () => {
  const { dom, isObserved } = useObserve();

  const t = useTranslations("Index");

  return (
    <div
      ref={dom}
      className={`max-w-screen-xl mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center ${
        isObserved && "animate__animated animate__fadeIn animate__slow"
      }`}
    >
      <div className="grow relative w-96 md:w-[60rem] md:flex flex-col-reverse">
        <div className="text-center">
          <div className="text-blue-600 font-semibold md:text-2xl">
            Deep-ID Mobile
          </div>
          <div className="mt-2">모바일 감식 장비 - 설명 추가</div>
        </div>
        <HoverImage image={product1} name="product1" />
      </div>
      <div className="grow flex flex-col md:flex-row w-full justify-center items-center md:items-stretch">
        <div className="bg-blue-600 w-full rounded-b-2xl md:rounded-none text-center text-white py-2 md:p-4 md:text-2xl flex items-center justify-center">
          {t("solution1")}
        </div>
        <div className="relative flex flex-col justify-center items-center md:px-4">
          <div className="text-[16rem] md:text-[24rem] text-blue-100">
            <HiCloud />
          </div>
          <div className="-mt-4 md:-mt-8 mb-8 font-bold md:text-2xl">
            {t("saas")}
          </div>
          <Image className="absolute px-4" src={deepId} alt="Deep-ID" />
        </div>
        <div className="bg-blue-600 w-full rounded-t-2xl md:rounded-none text-center text-white py-2 md:p-4 md:text-2xl flex items-center justify-center">
          {t("solution2")}
        </div>
      </div>
      <div className="grow w-96 md:w-[60rem]">
        <HoverImage image={product2} name="product2" />
        <div className="text-center">
          <div className="text-blue-600 font-semibold md:text-2xl">
            Deep-ID Desktop
          </div>
          <div className="mt-2">데스크탑 형 감식 장비 - 설명 추가</div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
