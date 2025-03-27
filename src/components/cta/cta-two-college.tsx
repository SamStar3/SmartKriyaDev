import Link from "next/link";
import { RightArrow } from "../svg";

export default function CtaTwoCollege() {
  return (
    <section className="cta-area tp-cta-2-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-12">
            <div className="tp-cta-2-wrapper text-center">
              <h3 className="tp-cta-2-title">
                Start Transforming Your Students'{' '}
            
                Future{" "}
              </h3>
              <p>Partner with us</p>
              <div className="tp-hero-btn">
                        <Link className="tp-btn" href="/">
                          Contact us
                          <span>
                            <RightArrow/>
                          </span>
                        </Link>
                      </div>
 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
