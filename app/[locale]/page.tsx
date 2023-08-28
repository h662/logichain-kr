"use client";

import { NextPage } from "next";

import Intro from "@/app/components/home/Intro";
import Description from "@/app/components/home/Description";
import ProductIntro from "@/app/components/home/ProductIntro";

const Home: NextPage = () => {
  return (
    <main>
      <Intro />
      <Description />
      <ProductIntro />
    </main>
  );
};

export default Home;
