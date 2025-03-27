import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusActivityArea from "@/components/campus/campus-activity-area";
import CampusChooseAreaTwo from "@/components/campus/campus-choose-area-2";
import CampusStudentArea from "@/components/campus/campus-student-area";
import CtaTwo from "@/components/cta/cta-two";
import { Metadata } from "next";
import FinancialAidArea from "../university-financial/_components/financial-aid-area";

export const metadata: Metadata = {
  title: "University Campus - Acadia",
};

export default function UniversityCampusPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="Corporates" subtitle="For" />
      {/* breadcrumb area end */}

      <CampusStudentArea/>
      <CampusChooseAreaTwo />

      <CampusActivityArea/>

      {/* campus choose area start */}
      {/* campus choose area end */}

      {/* counter area start */}
      {/* <CounterFive/> */}
      {/* counter area end */}

      {/* campus student area start */}
      {/* campus student area end */}
      <FinancialAidArea/>

      {/* campus activity area start */}
      {/* <CampusActivityArea/> */}
      {/* campus activity area end */}

      {/* campus video area start */}
      {/* <CampusVideoArea/> */}
      {/* campus video area end */}

      {/* campus life area start */}
      {/* <CampusLifeArea/> */}
      {/* campus life area end */}
      <CtaTwo/>
    </main>
  );
}
