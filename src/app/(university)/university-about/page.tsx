import AboutTwo from "@/components/about/about-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CtaTwoVision from "@/components/cta/cta-two-vision";
import TutoringFeatures from "@/components/feature/tutoring-features";
import MissionAreaTwo from "@/components/mission/mission-area-2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Smartkriya",
};

export default function UniversityAboutPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="About Us"
        subtitle="About Us"
      />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90"/>
      {/* about area end */}
      <CtaTwoVision/>

      <MissionAreaTwo/>
      {/* counter area start */}
      {/* counter area end */}

      {/* mission area start */}
      {/* mission area end */}
      <TutoringFeatures/>
      {/* <WhyChooseUsArea/> */}

      {/* about area start */}
      {/* <AboutThree/> */}
      {/* about area end */}

      {/* team area start */}
      {/* <TeamAreaThree/> */}
      {/* team area end */}

      {/* about campus area start */}
      {/* <AboutCampus/> */}
      {/* about campus area end */}
    </main>
  );
}
