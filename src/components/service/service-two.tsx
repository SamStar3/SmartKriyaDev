// import heading_shape from '@/assets/img/shape/service/services-shape-2.png';
import Image from "next/image";


const servicesData = [
   {
      id: 1,
      title: "On-Campus Training ",
      description1: "Technical and non-technical",
      description2: "Specialised trainers",
      iconActive: "/assets/img/icon/service/services-3-icon-1.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-1.svg",
   },
   {
      id: 2,
      title: "Integrated Curriculum",
      description1: "Industry-aligned modules",
      description2: "Certification programs",
      iconActive: "/assets/img/icon/service/services-3-icon-3.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-3.svg",
   },
   {
      id: 3,
      title: "Placement Partnership",
      description1: "Job fairs",
      description2: "Direct corporate connect",
      iconActive: "/assets/img/icon/service/services-3-icon-2.svg",
      iconHover: "/assets/img/icon/service/services-3-hover-2.svg",
   },

];

export default function ServiceTwo() {
   return (
      <section className="service-area tp-service-3-bg" style={{ backgroundImage: `url(/assets/img/bg/services-4-bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="tp-section p-relative mb-45 text-center">
                     <h2 className="tp-section-title-white">Our College <span>Partnership</span> Model</h2>
                     {/* <h2 className="tp-tutor-section-title">
                Our college <span> partnership</span> model
              </h2> */}
                     <div className="tp-service-3-heading">
                        {/* <Image src={heading_shape} alt="heading-shape" /> */}
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               {servicesData.map((item) => (
                  <div key={item.id} className="col-lg-4 col-sm-6">
                     <div className="tp-service-3-item mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="tp-service-3-icon">
                           <span className="tp-service-3-icon-active">
                              <Image src={item.iconActive} alt="icon" width={35} height={36} />
                           </span>
                           <span className="tp-service-3-icon-hover">
                              <Image src={item.iconHover} alt="icon" width={35} height={36} />
                           </span>
                        </div>
                        <div className="tp-service-3-content">
                           <h4 className="tp-service-3-title">
                              <a href="#" dangerouslySetInnerHTML={{ __html: item.title }}></a>
                           </h4>
                           <p><li>{item.description1}</li></p>
                           <p><li>{item.description2}</li></p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
