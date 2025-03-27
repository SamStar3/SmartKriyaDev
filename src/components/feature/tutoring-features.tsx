import Image from "next/image";

const tutorFeatures = [
  {
    id: 1,
    title: "Industry-Ready Training",
    description: "Industry-Ready Training.",
  },
  {
    id: 2,
    title: "Support in Placements",
    description: "Strong corporate partnerships .",
  },
  {
    id: 3,
    title: "Expert Trainers",
    description: "Learn from experienced professionals.",
  },
  {
    id: 4,
    title: "Practical Learning",
    description: "Real-world scenarios, not just theory.",
  },
];

export default function TutoringFeatures() {
  return (
    <section className="tutor-area grey-bg pb-80 pt-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tp-tutor-section text-center mb-100">
              <h3 className="tp-tutor-section-title">
                Why Choose <span> Smartkriya</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          
          {tutorFeatures.map((feature) => (
            <div className="col-lg-6" key={feature.id}>
              <div className="tp-tutor-item text-center mb-30">
                <div className="tp-tutor-icon">
                  <span>
                    <Image
                      src="/assets/img/icon/tutor/smart-icon-2.svg"
                      alt={feature.title}
                      width={42}
                      height={30}
                    />
                  </span>
                </div>
                <div className="tp-tutor-content">
                  <h4 className="tp-tutor-title">
                    <a>{feature.title}</a>
                  </h4>
                  {/* <p>{feature.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
