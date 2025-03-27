import AdmissionArea from "@/components/admission/admission-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseArea from "@/components/campus/campus-choose-area";
import ProcessTwo from "@/components/process/process-two";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Admission Overview - Acadia",
};

export default function UniversityAdmissionOverviewPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Students"
        subtitle=" For"
      />
      {/* breadcrumb area end */}

      {/* campus overview area start */}
      <CampusChooseArea />
      {/* campus overview area end */}

      {/* counter area start */}
      {/* <CounterThree /> */}
      {/* counter area end */}
      <ProcessTwo/>

      {/* admission area start */}
      <AdmissionArea />
      {/* admission area end */}

      {/* admission cta area start */}
      {/* <AdmissionCtaArea /> */}
      {/* admission cta area end */}

      {/* admission apply area start */}
      {/* <AdmissionApplyArea /> */}
      {/* admission apply area end */}
      {/* <ProcessOne/> */}
      {/* <ProcessThree/> */}

    </main>
  );
}
