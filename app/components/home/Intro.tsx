"use client";

import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import { Link as ScrollLink } from "react-scroll";
import { FC } from "react";

import deepId from "@/public/images/deep-id.png";
import { useObserve } from "@/app/lib/client";
import Background from "../Background";

const Intro: FC = () => {
  const { dom, isObserved } = useObserve();

  return (
    <div>
      <div
        ref={dom}
        className={`min-h-screen max-w-screen-xl mx-auto flex flex-col justify-center items-center ${
          isObserved && "animate__animated animate__fadeIn animate__slow"
        }`}
      >
        <Image
          className="z-10 w-48 md:w-96 mb-4 md:mb-8"
          src={deepId}
          alt="deep-id"
        />
        <div className="text-xl md:text-6xl font-semibold">
          Forensic as a Service
        </div>
        <button className="absolute bottom-12 md:bottom-6 text-gray-400 text-4xl md:text-6xl hover:text-black duration-500 animate__animated animate__heartBeat animate__infinite">
          <ScrollLink to="description" spy={true} smooth={true} offset={-48}>
            <HiChevronDown />
          </ScrollLink>
        </button>
      </div>
      <Background />
    </div>
  );
};

export default Intro;
