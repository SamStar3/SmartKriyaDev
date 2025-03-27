import icon_2 from "@/assets/img/icon/tutor/curriculum.svg";
import icon_4 from "@/assets/img/icon/tutor/guidance.svg";
import icon_1 from "@/assets/img/icon/tutor/placement.svg";
import Image from "next/image";

const service_data = [
  {
    id: 1,
    icon: icon_1,
    title: "Improved Placement Rates",
    description1: "Enhance your college's reputation",
    description2: "Attract better students",
    description3: "Attract better students",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Industry-Connected Curriculum",
    description1: "Bridge the academia-industry gap",
    description2: "Real-world skills for students",
  },
  {
    id: 3,
    icon: icon_4,
    title: "Infrastructure Support",
    description1: "Online and offline training ",
    description2: "Digital learning tools",
  },
  // {
  //   id: 4,
  //   icon: icon_4,
  //   title: "Expert Career Guidance",
  //   description1: "Professional counsellors",
  //   description2: "Industry insights",
  // },
];

export default function ServiceThree() {
  return (
    <section className="service-area tp-service-5-wrap">

        <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-about-4-wrapper wow fadeInUp mt-20 text-center" data-wow-delay=".3s">
                     {/* <h2 className="tp-about-4-head" >Why choose SmartKriya&reg;</h2> */}
                     {/* <div className="tp-tutor-section text-center mb-40"> */}
              <h2 className="tp-tutor-section-title">
                Why choose <span> SmartKriya</span>
              </h2>
            {/* </div> */}
                  </div>
               </div>
            </div>
         </div>




      <div className="container-fluid">
        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="tp-service-5-item text-center">
                <div className="tp-service-5-icon">
                  <span >
                    <Image src={item.icon} alt={item.title} width={70} height={70} />
                  </span>
                </div>
                <div className="tp-service-5-content">
                  <h4 className="tp-service-5-title">
                    <a href="#">{item.title}</a>
                  </h4>
                  <p><li>{item.description1}</li></p>
                  <p><li>{item.description2}</li></p>
                  {/* <p><li>{item.description3}</li></p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
