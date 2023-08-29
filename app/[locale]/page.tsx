"use client";

import { NextPage } from "next";

import HomeIntro from "@/app/components/home/HomeIntro";
import HomeDescription from "@/app/components/home/HomeDescription";
import HomeProductIntro from "@/app/components/home/HomeProductIntro";

const Home: NextPage = () => {
  return (
    <main>
      <HomeIntro />
      <HomeDescription />
      <HomeProductIntro />
    </main>
  );
};

export default Home;
