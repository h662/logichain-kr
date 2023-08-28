"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";

import logichain from "../../public/images/logichain.png";
import { useTranslations } from "next-intl";

type Prop = {
  locale: string;
};

const Header: FC<Prop> = ({ locale }) => {
  const [currentLocale, setCurrentLocale] = useState<string>("en");

  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("Index");

  const onClickKor = () => {
    router.replace(pathname, { locale: "ko" });
  };
  const onClickEng = () => {
    router.replace(pathname, { locale: "en" });
  };

  useEffect(() => {
    setCurrentLocale(locale);
  }, []);

  return (
    <header className="bg-white bg-opacity-70 fixed top-0 left-0 w-full shadow-md shadow-blue-100 z-50">
      <div className="max-w-screen-xl mx-auto px-2 py-4 flex justify-between items-center">
        <Link href="/">
          <Image className="w-32 md:w-48" src={logichain} alt="Logichain" />
        </Link>
        <div className="flex items-center">
          <div className="text-xs md:text-lg text-gray-700 flex gap-2 md:gap-4">
            <Link
              className="hover:bg-gray-300 px-2 py-1 rounded-md duration-500 truncate"
              href="/company"
            >
              {t("companyOverview")}
            </Link>
            <Link
              className="hover:bg-gray-300 px-2 py-1 rounded-md duration-500 truncate"
              href="/product"
            >
              {t("productService")}
            </Link>
          </div>
          <div className="ml-2 md:ml-4 font-thin text-gray-400 text-xs md:text-base truncate">
            <button
              className={`${currentLocale === "ko" && "font-normal"}`}
              onClick={onClickKor}
            >
              KOR
            </button>{" "}
            |{" "}
            <button
              className={`${currentLocale === "en" && "font-normal"}`}
              onClick={onClickEng}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
