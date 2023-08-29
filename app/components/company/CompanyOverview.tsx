"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

const CompanyOverview: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="bg-blue-100" id="companyDescription">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-4 md:px-16 items-start  text-center text-lg md:text-5xl font-semibold py-20 md:py-40">
        <div>2023</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>블록체인,핀테크 기반 ESG서비스 경진대회 - 우수상</li>
          <li>일본 핀테크 파이널리스트</li>
          <li>창업성장기술개발지원사업 협약(중소벤처기업부)</li>
          <li>핀테크API지원사업 협약(한국인터넷진흥원)</li>
          <li>글로벌창업사관학교 지원협약(중소벤처기업진흥공단)</li>
          <li>기보캠프 12기 지원협약</li>
        </ol>
        <div>2022</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>우리금융지주 디노랩 3.5기 지원협약</li>
          <li>인천공항공사 ICN-LAB 지원사업협약</li>
          <li>KISA-SK증권 블록체인 스타트업 혁신성장 지원사업선정</li>
          <li>AI실증 테스트베드사업 협약(정보통신산업진흥원)</li>
          <li>국방기술활용 경진대회수상(방위사업청)</li>
          <li>방산벤처지원사업 협약(대전테크노파크)</li>
          <li>AI역량강화지원사업 선정(연구개발특구재단)</li>
        </ol>
        <div>2021</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>블록체인컨설팅지원사업 선정(정보통신산업진흥원)</li>
          <li>중소벤처기업부 비대면스타트업육성사업협약(창업진흥원)</li>
        </ol>
        <div>2020</div>
        <ol className="flex flex-col justify-center items-start text-base md:text-3xl font-thin mt-2 md:mt-4 mb-8 md:mb-16">
          <li>비대면서비스정보보호해커톤 최우수상(한국인터넷진흥원)</li>
          <li>㈜로지체인 창업</li>
        </ol>
        <div>보유 기술</div>
        <div className="mt-4 md:mt-8 font-normal">
          특허 3 / 실시권 14 / 저작권 2
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
