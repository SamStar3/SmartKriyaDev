
const financialAidData = [
  {
    id: 1,
    imgSrc: "/assets/img/course/details/financial-thumb-1.jpg",
    title: "Customised Recruitment Drives",
    description:
      "Acadia’s commitment to student success, important scholarship, and creative activity sets it apart from other colleges.",
  },
  {
    id: 2,
    imgSrc: "/assets/img/course/details/financial-thumb-2.jpg",
    title: "Pre-Employment Training",
    description:
      "Your FAFSA will determine what grants you qualify for—both from The Acadia University & from federal and state government.",
  },
  {
    id: 3,
    imgSrc: "/assets/img/course/details/financial-thumb-3.jpg",
    title: "Campus-to-Career Programs",
    description:
      "Many students have used federal and private loans to fund a quality education that would otherwise be out of reach.",
  },
  {
    id: 4,
    imgSrc: "/assets/img/course/details/financial-thumb-3.jpg",
    title: "Skill Gap Analysis & Training",
    description:
      "Many students have used federal and private loans to fund a quality education that would otherwise be out of reach.",
  },
];

export default function FinancialAidArea() {
  return (
    <section className="pt-0 pb-90 grey-bg">
      <div className="container">
        <div className="row">
  
          {/* <div className="col-lg-12">
            <div className="tp-campus-activity-heading mb-70">
              <h3 className="tp-campus-activity-title">
                Our corporate Offering
                {" "}
              </h3>
            </div>
          </div> */}
                      <div className="tp-tutor-section text-center mb-40">
              <h3 className="tp-tutor-section-title">
                What we <span> offer</span>
              </h3>
            </div>

          {financialAidData.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-md-6">
                <div className="tp-financial-item mb-30">
                  <div className="tp-financial-thumb">
                    <span
                      // src={item.imgSrc}
                      // alt={item.title}
                      // width={382}
                      // height={219}
                      style={{ height: "auto" }} />
                  </div>
                  <div className="tp-financial-content">
                    <h4 className="tp-financial-content-title">{item.title}</h4>
                    {/* <p>{item.description}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
