'use client';
import localFont from "next/font/local";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";


const myFont = localFont({ src: '../../../public/assets/fonts/Quantify.ttf' })

// 
const heroSliderData = [
  {
    id: 1,
    subtitle: "Your Bridge from",
    title: " Campus to Successful Careers",
    bgImg: "/assets/img/hero/bg1.jpeg",
  },
  {
    id: 2,
    subtitle: "Your bridge to",
    title: "Your Future Work force",
    bgImg: "/assets/img/hero/bg2.jpeg",
  },
  {
    id: 3,
    subtitle: "We turn potential",
    title: " into performance.",
    bgImg: "/assets/img/hero/bg3.jpeg",
  },
];

const slider_options: SwiperOptions = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
};

export default function HeroAreaOne() {
  return (
    <section className="tp-hero-area">
      <Swiper {...slider_options} modules={[EffectFade]} className="swiper tp-slider-active">
        {heroSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="tp-hero-item">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-11">
                    <div className="tp-hero-wrapper">
                      <span className="tp-hero-subtitle">
                        {item.subtitle}
                      </span>
                      <h2 className="tp-hero-title">
                        {item.title}
                      </h2>
                      
                      {/* <div className="tp-hero-btn">
                        <Link className="tp-btn" href="/">
                          Learn More
                          <span>
                            <RightArrow/>
                          </span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tp-hero-bg"
                style={{ backgroundImage: `url(${item.bgImg})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
