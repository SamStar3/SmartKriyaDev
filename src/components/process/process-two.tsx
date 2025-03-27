
const applicationProcess = [
    {
      step: 1,
      title: "Assessment of Current Skills",
      description: ''
      // linkText: "Take Test",
      // linkHref: "/"
    },
    {
      step: 2,
      title: "Customised Learning Path",
      description: ''
    },
    {
      step: 3,
      title: "Interactive Training Sessions",
      description: ''
    },
    {
      step: 4,
      title: "Real World Case Studies",
      description: ''
    },
    {
      step: 5,
      title: "Mock Interviews",
      description: ''
    },
    {
      step: 6,
      title: "Placement Assistance",
      description: ''
    }
  ];
  

export default function ProcessTwo() {
  return (
    <section className="tp-apply-process-area  pt-30 pb-30">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div id="down" className="tp-apply-process-wrapper">
          <div className="col-lg-12">
            <div className="tp-tutor-section text-center mb-25">
              <h3 className="tp-tutor-section-title">
                Our<span> Training</span>&nbsp;Methodology
              </h3>
            </div>
          </div>

            {applicationProcess.map((step, index) => (
              <div key={index} className="tp-apply-process-box pb-5">
                <h4 className="tp-apply-process-subtitle mp-5">
                  <span>{step.step}</span>{step.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: step.description }}></p>

                {/* {step.linkText && step.linkHref && (
                  <Link className="tp-btn mt-0" href={step.linkHref}>
                    {step.linkText}
                  </Link>
                )} */}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
