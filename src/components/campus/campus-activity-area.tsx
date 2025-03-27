import Image from "next/image";

const activities = [
  {
    id: 1,
    title: "Understanding Your Needs",
    icon: "/assets/img/icon/tutor/smart-icon-2.svg",
    delay: ".3s",
    items: ["Trained to your requirements", "Access to a pool of job ready candidates",],
  },
  {
    id: 2,
    title: "Customising Programs",
    icon: "/assets/img/icon/tutor/smart-icon-2.svg",
    delay: ".5s",
    items: [
      "Reduce training time and costs",
      "Improve retention rates",
    ],
  },
  {
    id: 3,
    title: "Implementing Training",
    icon: "/assets/img/icon/tutor/smart-icon-2.svg",

    delay: ".7s",
    items: [
      "Improved workflow",
       "Efficient deployment of new recruits", 
      ],
  },
  {
    id: 4,
    title: "Placement Completion",
    icon: "/assets/img/icon/tutor/smart-icon-2.svg",

    delay: ".7s",
    items: [
      "Tailored to your organisation",
       "Flexible training for existing employees", 
      ],
  },
];

export default function CampusActivityArea() {
  return (
    <section className="tp-campus-activity-area  pt-0 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="tp-campus-activity-heading mb-70">
              <h3 className="tp-campus-activity-title">
                Our corporate training process
                {" "}
              </h3>
            </div> */}
                        <div className="tp-tutor-section text-center mb-40">
              <h3 className="tp-tutor-section-title">
                Our corporate<span> training</span>  process
              </h3>
            </div>
          </div>

          {activities.map((activity, index) => (
            <div className="col-lg-6 col-md-6 mb-40"  key={index}>
              <div
                className={`tp-campus-activity-content wow fadeInUp`}
                data-wow-delay={activity.delay}
              >
                <h4 className="tp-campus-activity-list-title pt-10">
                  <span>
                    <Image
                      src={activity.icon}
                      alt="Activity Icon"
                      width={60}
                      height={60}
                    />
                  </span>
                  {activity.title}
                </h4>
   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
