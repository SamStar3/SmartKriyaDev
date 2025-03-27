import AboutOne from '@/components/about/about-one';
import AboutOneApproach from '@/components/about/about-one-approach';
import AboutOneMission from '@/components/about/about-one-mission';
import CtaTwo from '@/components/cta/cta-two';
import TutoringFeatures from '@/components/feature/tutoring-features';
import HeroAreaOne from '@/components/hero-area/hero-area-one';
import ProcessThree from '@/components/process/process-three';
import ProgramArea from '@/components/program/program-area';
import ServiceOne from '@/components/service/service-one';
import { Metadata } from 'next';




export const metadata: Metadata = {
  title: "Smartkriya",
};

export default function HomePage() {
  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne/>
      {/* hero area end */}

      {/* service area start */}
      <ServiceOne/>
      {/* service area end */}

      {/* <CtaTwoVision/> */}
      {/* <MissionAreaTwo/> */}

      {/* about area start */}
      <AboutOne/>
      <AboutOneMission/>
      <AboutOneApproach/>
      {/* about area end */}

      {/* counter area start */}
      {/* <CounterOne/> */}
      {/* counter area end */}

      {/* program area start */}
      <ProgramArea/>
      {/* program area end */}
      {/* <MissionArea/> */}

      
      {/* event area start */}
      {/* <EventArea/> */}
      {/* event area end */}

      {/* testimonial area start */}
      {/* <TestimonialOne/> */}
      {/* testimonial area end */}

      {/* blog area start */}
      {/* <BlogOne/> */}
      {/* blog area end */}

      {/* instagram area start */}
      {/* <InstagramArea/> */}
      {/* instagram area end */}
      <TutoringFeatures/>

      {/* <AdmissionArea /> */}

      <ProcessThree/>



      {/* cta area start */}
      <CtaTwo/>
      {/* cta area end */}
    </main>
  )
}
