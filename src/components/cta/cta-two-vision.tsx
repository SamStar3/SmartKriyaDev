import shape_underline from "@/assets/img/unlerline/cta-2-svg-1.svg";
import Image from "next/image";

export default function CtaTwoVision() {
  return (
    <section
    className="cta-area tp-cta-bg grey-bg"
    data-background="assets/img/cta/cta-bg-1.jpg"
    style={{ backgroundImage: "url(/assets/img/cta/cta-bg-1-blue.jpg)" , padding:'0'}}
  >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10">
            <div className="tp-cta-2-wrapper text-center">
              <h4 className="tp-cta-2-title">
                Your{' '}
                <span>
                  BRIDGE &nbsp;
                  <Image
                    className="tp-underline-shape-12 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>from campus to careers </h4><br/>
                {/* <h3>SmartKriya is committed to bridging the gap between academic education and industry needs</h3> */}
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
