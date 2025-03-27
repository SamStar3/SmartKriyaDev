import matchskills from '@/assets/img/course/details/admisson-overview-3.jpg';
import Image from "next/image";
import Link from "next/link";
import { RightArrowSeven } from "../svg";

export default function AdmissionArea() {
  return (
    <section className="tp-admission-overview-area grey-bg pb-80">
      <div className="container">
        <div className="row">
        <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
                     <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tp-tutor-section text-center mt-30 mb-50">
              <h3 className="tp-tutor-section-title">
                Our Student <span> Program</span>
              </h3>
            </div>
          </div>
        </div>
            </div>
          <div className="col-lg-8">
            <div
              className="tp-admission-overview-heading wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="tp-admission-overview-title">.</h3>
            </div>
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={matchskills}
                alt="overview-img"
                style={{ height: "auto" }}
              />
            </div>
            <div className="tp-admission-overview-btn mt-50 flex flex-col items-center">
                {/* <Link className="tp-btn" href="/">
                  Take Accessment <br />
                  Test{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link> */}
              </div>
          </div>
          <div className="col-lg-4">
            <div
              className="tp-admission-overview-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <p>
                 <h2> 1. Financial Sector</h2>
                  - Banking Operations<br/>
                  - Fintech Fundamentals<br/>
                  - Sales and Marketing <br/>
                  - AI Prompt Skills 

              </p>
              <p>
                 <h2> 2. Project Management</h2>
                  - Personnel Management<br/>
                  - Problem Solving Skills<br/>
                  - Professional Communication <br/>
                  - AI Prompt Skills 

              </p>
              <p>
                 <h2> 3. Office Administration</h2>
                  - MS-Office Knowledge<br/>
                  - Written Communication Skills<br/>
                  - Team Coordination<br/>
                  - AI Prompt Skills 

              </p>
              {/* <div className="tp-admission-overview-btn mt-50 align-items-center">
                <Link className="tp-btn" href="/">
                  Take Accessment <br />
                  Test{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
          {/* <div className='row'>
          <div className="tp-admission-overview-btn align-items-center">
                <Link className="tp-btn" href="/">
                  Take Accessment <br />
                  Test{" "}
                  <span>
                    <RightArrowSeven />
                  </span>
                </Link>
              </div>
          </div> */}
        </div>

      </div>
      
    </section>
  );
}

export function AdmissionCtaArea() {
  return (
    <section className="tp-admission-cta-area grey-bg pb-160">
      <div className="container">
        <div className="tp-admission-cta-box">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="tp-admission-cta-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-admission-cta-title">
                  Calculate Your <br /> Estimated Scholarship.
                </h3>
                <p>
                  How affordable is Harvard? See for yourself with our <br />
                  Net Price Calculator.
                </p>
                <div className="tp-admission-cta-btn">
                  <Link className="tp-btn" href="/university-tuition-fees">
                    Net Price Calculator{" "}
                    <span>
                      <RightArrowSeven />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="tp-admission-cta-thumb wow fadeInUp"
                data-wow-delay=".5s"
              >
                <Image
                  src={matchskills}
                  alt="overview-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdmissionApplyArea() {
  return (
    <section className="tp-admission-apply-area grey-bg pt-40 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div
              className="tp-admission-apply-thumb p-relative wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={matchskills}
                alt="overview-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="tp-admission-apply-heading wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h3 className="tp-admission-apply-title">Apply for 2024</h3>
              <p>
                We’ll guide you through the Common Application <br />
                or Coalition Application, Powered by Scoir, and answer <br />
                any questions you have along the way.
              </p>
              <div className="tp-admission-apply-btn">
                <Link className="tp-btn" href="/university-apply">
                  How To Apply
                  <span>
                    <RightArrowSeven />
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
