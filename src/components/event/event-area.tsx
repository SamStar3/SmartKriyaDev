import mission_thumb_1 from "@/assets/img/our-mission/thumb1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/thumb2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/thumb3.jpg";
import mission_thumb_4 from "@/assets/img/our-mission/thumb4.jpg";
import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import Image from "next/image";
import { RightArrow } from "../svg";


const missionData = [
  {
    id: 1,
    title: "Industry-Ready Training:",
    description:
    "Programs designed with employers",
    imgSrc: mission_thumb_1,
  },
  {
    id: 2,
    title: "Support in Placements:",
    description:
    "Strong corporate partnerships",
    imgSrc: mission_thumb_2,
  },
  {
    id: 3,
    title: "Expert Trainers:",
    description:
      "Learn from experienced professionals",
    imgSrc: mission_thumb_3,
  },
  {
    id: 4,
    title: "Practical Learning:",
    description:
      "Real-world scenarios, not just theory",
    imgSrc: mission_thumb_4,
  },
];

export default function EventArea() {
  return (
    <section className="event-area grey-bg pt-85 pb-110">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-md-8">
            <div
              className="tp-event-section mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h3 className="tp-section-2-title">
                  Why choose {" "}
                  <span>
                    SmartKriya{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-4">
            <div className="tp-event-btn text-md-end mb-70">
              <div className="tp-btn">
                Contact Us
                <span>
                  <RightArrow />
                </span>
              </div>
            </div>
          </div>
        </div>
        {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
                    i !== missionData.length - 1 ? "mb-20" : ""
                  }`}
                >
                  <div className="tp-our-mission-item-content">
                    <h4 className="tp-our-mission-item-title">{item.title}</h4>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    {/* <div className="tp-our-mission-item-btn">
                      <a className="tp-btn-3" href="#">
                        Learn More{" "}
                        <i>
                          <RightArrowTwo clr="white" />
                        </i>
                      </a>
                    </div> */}
                  </div>
                  <div className="tp-our-mission-item-thumb">
                    <div className={`tp-our-mission-item-thumb-${item.id}`}>
                      <Image src={item.imgSrc} alt={item.title} style={{ height: "auto" }} />
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </section>
  );
}
