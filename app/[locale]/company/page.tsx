import { NextPage } from "next";

import CompanyIntro from "@/app/components/company/CompanyIntro";
import CompanyDescription from "@/app/components/company/CompanyDescription";
import CompanyOverview from "@/app/components/company/CompanyOverview";
import CompanyPartner from "@/app/components/company/CompanyPartner";

const Company: NextPage = () => {
  return (
    <div className="min-h-screen">
      <CompanyIntro />
      <CompanyDescription />
      <CompanyOverview />
      <CompanyPartner />
    </div>
  );
};

export default Company;
