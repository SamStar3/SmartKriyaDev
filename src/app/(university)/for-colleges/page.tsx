import AboutTwo from "@/components/about/about-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import PlanArea from "@/components/plan/plan-area";
import ServiceThree from "@/components/service/service-three";
import ServiceTwo from "@/components/service/service-two";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Colleges",
};

export default function ForColleges() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Colleges"
        subtitle="For"
      />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90"/>
      {/* about area end */}
      {/* undergraduate area start */}
      {/* <UndergraduateArea/> */}
      {/* undergraduate area end */}
      <ServiceThree/>
      <ServiceTwo/>
      {/* <BannerAreaTwo/> */}
      {/* <CtaTwoCollege/> */}


      {/* plan area start */}
      <PlanArea/>
      {/* <BannerArea/> */}


      {/* plan area end */}

    </main>
  );
}
