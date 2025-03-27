import Link from "next/link";
import { RightArrowFour } from "../svg";

export default function CtaCorporates() {
  return (
    <section className="cta-area tp-cta-2-bg-green">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h2 className="tp-cta-2-title">
              Build Your Future Workforce{' '}

              </h2>
              <div className="tp-footer-contact">
                              <div className="tp-footer-btn ">
                                 <Link className="tp-btn-round-2 " href="/contact">Contact Us
                                    <span>
                                       <RightArrowFour />
                                    </span>
                                 </Link>
                              </div>
                           </div>
              {/* <div className="tp-cta-2-form">
                <form action="#">
                  <span>
                    <EmailTwo />
                  </span>
                  <input type="text" placeholder="Enter your email address" />
                  <div className="tp-cta-2-btn">
                    <button className="tp-btn-round">Subscribe!</button>
                  </div>
                </form>
              </div>
              <div className="tp-cta-2-info-list">
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  Easy to Access
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  No Credit card
                </span>
                <span>
                  <span>
                    <CheckSvg />
                  </span>
                  85,000 student onboard with us
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
