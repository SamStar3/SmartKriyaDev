import mission_thumb_1 from "@/assets/img/our-mission/mission/mission-thumb-1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/mission/mission-thumb-2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/mission/mission-thumb-3.jpg";
import Image from "next/image";
import { DownArrowThree } from "../svg";


export default function CampusChooseAreaThree() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-80 grey-bg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-campus-choose-wrapper text-center">
                     <div className="tp-campus-choose-btn">
                        <p>Vision</p>
                        <div className="tp-campus-choose-content mb-10">
                           <h2 className="tp-campus-choose-title">Transforming Today's Students into Tomorrow's Professionals.</h2>
                        </div>
                        <a href="#"><span>
                           <DownArrowThree/>
                        </span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-mission-valus-thumb mb-30">
                     <Image className="text-center" src={mission_thumb_1} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Vision</h4>
                        <p>Transforming Today's Students into Tomorrow's Professionals</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="tp-mission-valus-thumb main pt-100 mb-30 pl-125">
                     <Image  src={mission_thumb_2} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Mission</h4>
                        <p>SmartKriya is committed to bridging the gap between academic education and industry demands.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="tp-mission-valus-thumb mb-30">
                     <Image className="text-center" src={mission_thumb_3} alt="mission-thumb" style={{height:'auto'}}/>
                     <div className="tp-mission-valus-content">
                        <h4 className="tp-mission-valus-title">Values</h4>
                        <p>- Providing training in new-age skills for non-tech careers</p><p>
- Fostering an ecosystem of practical learning and innovation for professional growth</p><p>
- Partnering with industry leaders to ensure our curriculum remains at the forefront of industry needs</p><p>
- Empowering students with not just technical skills, but also critical thinking, problem-solving and adaptability skills
</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
