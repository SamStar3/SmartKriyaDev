
import mission_img from '@/assets/img/our-mission/mission/mission-mesg.png';
import Image from "next/image";


export default function MissionAreaTwo() {
  return (
    <section className="tp-mission-area grey-bg pb-120">
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="tp-mission-warp pr-75">
                    <div className="tp-mission-heading">
                    {/* <h3 className="tp-mission-title">Smartkriya<br/> Mission</h3> */}
                    <h2 className="tp-school-4-title">Our <span>Vision
                              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="9" viewBox="0 0 120 9" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M115.442 8.25039C64.7892 -2.54947 20.433 3.78533 4.88329 8.17023C3.53609 8.55013 1.62363 8.4481 0.611686 7.94234C-0.400258 7.43658 -0.128479 6.71861 1.21872 6.33871C18.3618 1.5045 65.3347 -5.06747 118.455 6.25855C119.92 6.57094 120.434 7.27006 119.601 7.82009C118.769 8.37012 116.907 8.56277 115.442 8.25039Z" fill="#161613" />
                              </svg>
                           </span></h2>
                    </div>
                    {/* <div className="tp-mission-improve-box">
                    <span className="tp-mission-improve-dec">Improves retention</span>
                    <h4 className="tp-mission-improve-title">96 <span>%</span></h4>
                    <p>of our students successfully graduate and begin their <br/>
                        career development.</p>
                    </div> */}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="tp-mission-wrapper">
                    <div className="tp-mission-desc">
                    <h3 className='text-lg'>Transforming today's students into tomorrow's professionals</h3>
                    </div>
                    <div className="tp-mission-conversation-box p-relative">
                    <h4 className="tp-mission-conversation-title">The Smartkriya difference!</h4>
                    <p>We don't just train you - we connect you directly with employers!</p>
                    <div className="tp-mission-conversation-thumb">
                        <Image src={mission_img} alt="mission-img" style={{height:'auto'}}/>
                    </div>
                    {/* <div className="tp-mission-conversation-msg">
                        <span className="tp-mission-conversation-msg-1">Hello 👋</span>
                        <span className="tp-mission-conversation-msg-2">Ready for my first assignment!</span>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
