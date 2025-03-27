
export default function CtaOneVision() {
  return (
    <section
      className="cta-area tp-cta-bg grey-bg"
      data-background="assets/img/cta/cta-bg-1.jpg"
      style={{ backgroundImage: "url(/assets/img/cta/cta-bg-1-green.jpg)" }}
    >
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-wrapper d-flex text-center">
              <div className="tp-cta-logo">
                {/* <Link href="/">
                  <Image src={cta_logo} alt="cta-logo" />
                </Link> */}
              </div>
              <div className="tp-cta-content text-center">
                <h3 className="tp-cta-title">
                  SMARTKRIYA Vision
                </h3>
                <span>Transforming Today's Students into Tomorrow's Professionals</span>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-2 col-lg-3">
            <div className="tp-cta-btn-wrap">
              <div className="tp-cta-btn text-lg-end">
                <Link className="tp-btn" href="/university-apply">
                  Apply Now{" "}
                  <span>
                    <RightArrow clr="currentColor"/>
                  </span>
                </Link>
              </div>
              <div className="tp-cta-shape-1">
                <Image src={cta_shape} alt="shape" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
