import mission_thumb from "@/assets/img/our-mission/thumb-5.png";
import Image from "next/image";

const processData = [
  {
    id: 1,
    title: "Financial Services with AI skills",
    description:
      "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself.",
  },
  {
    id: 2,
    title: "Office Administration with AI Skills",
    description:
      "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",
  },
  {
    id: 3,
    title: "Project Management - technical and non - technical",
    description:
      "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
  },
];

export default function ProcessThree() {
  return (
    <section className="tp-our-mission-area grey-bg pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="tp-our-mission-thumb">
              <Image
                src={mission_thumb}
                alt="mission-thumb"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tp-financial-mission-wrapper">
            <div className="row ">
          <div className="col-lg-6">
            <div className="tp-tutor-section text-center mb-100">
              <h3 className="tp-tutor-section-title">
                Our <span> Focus</span>
              </h3>
            </div>
          </div>
        </div>
              {processData.map((item) => (
                <div key={item.id} className="tp-financial-process-box">
                  <h4 className="tp-financial-process-title">
                    <span >{item.id}</span>
                    {item.title}
                  </h4>
                  {/* <p>{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
