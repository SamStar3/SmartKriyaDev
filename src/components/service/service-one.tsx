import Image from "next/image";
import Link from "next/link";
import { RightArrowTwo } from "../svg";

// icons
import ser_icon_1 from "@/assets/img/icon/service/icon-1.svg";
import ser_icon_2 from "@/assets/img/icon/service/icon-2.svg";
import ser_icon_3 from "@/assets/img/icon/service/icon-3.svg";
import ser_shape from '@/assets/img/shape/service/services-shape-1.png';

// service data
const service_data = [
  {
    id: 1,
    icon: ser_icon_1,
    title: "For Corporates",
    text: "Ready-to-deploy talent for your future work force",
    link:"/for-corporates",
  },
  {
    id: 2,
    icon: ser_icon_2,
    title: "For  Colleges",
    text: "Prepare students for the jobs of today and the careers of tomorrow",
    link: "/for-colleges",
  },
  {
    id: 3,
    icon: ser_icon_3,
    title: "For Students",
    text: "We don't just train you - we connect you directly with employers",
    link: "/for-students",
  },
  // {
  //   id: 4,
  //   icon: ser_icon_4,
  //   title: "Scholarships <br/> & fees",
  //   text: "We have students coming from different backgrounds,cultures, & nationalities as well.",
  // },
];

export default function ServiceOne() {
  return (
    <section
      className="service-area tp-service-bg"
      style={{ backgroundImage: `url(/assets/img/bg/services-smart-bg.jpg)`, padding:'0' }}
    >
      <div className="container">
        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div
                className="tp-service-item text-center mb-40 wow fadeInUp"
                data-wow-delay={`.${item.id}s`}
              >
                <div className="tp-service-wrap">
                  <div className="tp-service-icon">
                    <span>
                      <Image src={item.icon} alt="service-icon" />
                    </span>
                  </div>
                  <h4 className="tp-service-title">
                    <Link
                      href={item.link}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Link>
                  </h4>
                  <div className="tp-service-btn">
                    <Link 
                    href={item.link}>
                      <span>
                        <RightArrowTwo />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tp-service-content">
                  <h5 className="text-sm">{item.text}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="tp-service-all text-center">
              <span>
                Trusted by the worlds{" "}
                <Link href="/university-about">
                  Best University <RightSmArrowTwo />
                </Link>
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="tp-service-shape">
        <div
          className="tp-service-shape-1 wow bounceIn"
          data-wow-duration="1.5s"
          data-wow-delay=".4s"
        >
          <Image
            src={ser_shape}
            alt="service-shape"
          />
        </div>
      </div>
    </section>
  );
}
