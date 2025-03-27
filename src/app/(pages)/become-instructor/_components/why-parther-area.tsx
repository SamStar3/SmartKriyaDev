import custom_training from '@/assets/img/instructor/custom-training.png';
import producitivity from '@/assets/img/instructor/increase-productivity.png';
import recruitment from '@/assets/img/instructor/recruitment.png';
import talent from '@/assets/img/instructor/talent.png';
import Image from "next/image";

const tabItems = [
  {
    id: 'home',
    title: 'Ready-to-Deploy Talent',
    ariaControls: 'home',
    ariaSelected: true,
    content: {
      title: 'Ready-to-Deploy Talent',
      subtitle1: '- Trained to your requirements',
      text1: ` `,
      subtitle2: '- Access to a pool of job ready candidates',
      text2: ``,
    },
    image:talent
  },
  {
    id: 'profile',
    title: 'Cost-Effective Recruitment',
    ariaControls: 'profile',
    ariaSelected: false,
    content: {
      title: 'Cost-Effective Recruitment',
      subtitle1: '- Reduce training time and costs',
      text1: ``,
      subtitle2: '  - Improve retention rates',
      text2: '',
    },
    image:recruitment
  },
  {
    id: 'contact',
    title: 'Increased productivity',
    ariaControls: 'contact',
    ariaSelected: false,
    content: {
      title: 'Increased productivity',
      subtitle1: '- Improved workflow',
      text1: ``,
      subtitle2: '- Efficient deployment of new recruits',
      text2: '',
    },
    image:producitivity
  },  
  {
    id: 'contact2',
    title: 'Customised Training Programs',
    ariaControls: 'contact',
    ariaSelected: false,
    content: {
      title: 'Customised Training Programs',
      subtitle1: '- Tailored to your organisation',
      text1: '',
      subtitle2: ' - Flexible training for existing employees',
      text2: '',
    },
    image:custom_training
  },
];

export default function WhyPartner() {
  return (
    <section className="tp-instructor-area tp-instructor-p pt-20 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="tp-instructor-title-wrap text-center mb-40 wow fadeInUp" data-wow-delay=".3s">
              <h3 className="tp-instructor-main-title">
                Why Partner with us
              </h3>
            </div> */}
                        <div className="tp-tutor-section text-center mb-40">
              <h3 className="tp-tutor-section-title">
                Why  <span> partner</span> with us
              </h3>
            </div>
            <div className="tp-instructor-become-tab pb-80 wow fadeInUp" data-wow-delay=".5s">
              <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                {tabItems.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      className={`nav-link ${tab.ariaSelected ? 'active' : ''}`}
                      id={`${tab.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls={tab.ariaControls}
                      aria-selected={tab.ariaSelected}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {tabItems.map((tab) => (
                  <div
                    className={`tab-pane fade ${tab.ariaSelected ? 'show active' : ''}`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    key={tab.id}
                  >
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="tp-instructor-become-wrap">
                          <h4 className="tp-instructor-become-title">{tab.content.title}</h4>
                          <span className="tp-instructor-become-subtitle">{tab.content.subtitle1}</span>
                          <p dangerouslySetInnerHTML={{ __html: tab.content.text1 }}></p>
                          <span className="tp-instructor-become-subtitle">{tab.content.subtitle2}</span>
                          <p>{tab.content.text2}</p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="tp-instructor-become-thumb text-start text-xl-end">
                          <Image src={tab.image} alt={tab.title}  width={260}
                      height={260}/>
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
  );
}
