import { FC, useEffect } from "react";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

const ProductNavigationButton: FC = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex items-start gap-2 md:gap-4 text-sm md:text-2xl px-2 md:px-0 md:py-2">
      <Link
        href="/product/mobile"
        className={`grow px-1 md:px-2 py-2 md:py-4 hover:bg-blue-200 rounded-full text-center ${
          pathname === "/product/mobile" &&
          "text-blue-600 font-semibold bg-blue-200"
        }`}
      >
        DeepID Mobile
      </Link>
      <Link
        href="/product/desktop"
        className={`grow px-1 md:px-2 py-2 md:py-4 hover:bg-blue-200 rounded-full text-center ${
          pathname === "/product/desktop" &&
          "text-blue-600 font-semibold bg-blue-200"
        }`}
      >
        DeepID Desktop
      </Link>
      <Link
        href="/product/ai"
        className={`grow px-1 md:px-2 py-2 md:py-4 hover:bg-blue-200 rounded-full text-center ${
          pathname === "/product/ai" &&
          "text-blue-600 font-semibold bg-blue-200"
        }`}
      >
        DeepID AI
      </Link>
    </div>
  );
};

export default ProductNavigationButton;
