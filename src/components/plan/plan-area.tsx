'use client';
import { useState } from "react";


const planData = [
   {
      id: 1,
      title: "Partnership Discussion",
      description: "Meet with us",
      image: "/assets/img/bg/plan/partnership2.jpg",
      link: "/",
   },
   {
      id: 2,
      title: "Need Analysis",
      description: "Discuss and analyze",
      image: "/assets/img/bg/plan/analyze.jpg",
      link: "/",
   },
   {
      id: 3,
      title: "Customised Program Design",
      description: "Create and customize",
      image: "/assets/img/bg/plan/customize2.jpg",
      link: "/",
   },   
   {
      id: 4,
      title: "Implementation",
      description: "Implement and Invoke",
      image: "/assets/img/bg/plan/implementation.jpg",
      link: "/",
   },
   {
      id: 5,
      title: "Ongoing Support & Evaluation",
      description: "Support and evaluvate",
      image: "/assets/img/bg/plan/support2.jpg",
      link: "/",
   },
];

export default function PlanArea() {
   const [activeId, setActiveId] = useState(1);
   return (
      <section className="plan-area tp-plan-4-wrap fix">
         <div className="container">
            <div className="row">
               {/* <div className="col-lg-3"> */}
                  <div className="tp-plan-4-section text-center mb-20">
                     {/* <span>Visit S!</span> */}
                     <h3 className="tp-plan-4-section-title">How It Works</h3>
                  {/* </div> */}
               </div>
               <div className="col-lg-12">
                  <div className="tp-plan-4-wrapper">
                     <div className="row">
                        {planData.map((item) => (
                           <div key={item.id} className="col-md-4 mb-15">
                              <div onMouseEnter={() => setActiveId(item.id)} className={`tp-plan-4-item ${activeId === item.id ? "active" : ""}`}>
                                 <div className="tp-plan-4-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
                                 <div className="tp-plan-4-content d-flex align-items-center justify-content-center">
                                    <div className="tp-plan-4-box text-center">
                                       <span>{item.id <= 9 ? `0${item.id}` : item.id}</span>
                                       <h4 className="tp-plan-4-title" dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                                       <p>{item.description}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
