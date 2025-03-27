
const shopServices = [
  {
    id: 1,
    title: "Improved Placement Rates",
    description1: "Enhance your college's reputation",
    description2: "Attract better students",
    // image: "/assets/img/shop/author/shop-icon-1.png",
    // backgroundImage: "/assets/img/shop/product/shop-service-shape.jpg",
  },
  {
    id: 2,
    title: "Industry-Connected Curriculum",
    description1: "Bridge the academia-industry gap",
    description2: "Real-world skills for students",
    // image: "/assets/img/shop/author/shop-icon-2.png",
  },
  {
    id: 3,
    title: "Infrastructure Support",
    description1: "Online and offline training ",
    description2: "Digital learning tools",
    // image: "/assets/img/shop/author/shop-icon-3.png",
  },
  {
    id: 4,
    title: "Expert Career Guidance",
    description1: "Professional counsellors",
    description2: "Industry insights",
    // image: "/assets/img/shop/author/shop-icon-3.png",
  },
];

export default function ServiceFour() {
  return (
    <section className="tp-shop-service-area pb-90">
      <div className="container">
        <div className="row">
          {shopServices.map((service) => (
            <div key={service.id} className="col-lg-6">
              <div
                className={`tp-shop-service-item d-flex justify-content-between align-items-center mb-30 ${
                  service.id === 1 ? "p-relative" : ""
                }`}
                
              >
                <div className="tp-shop-service-content">
                  <h2
                    className="tp-shop-service-title"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  ></h2>
                  <h5>{service.description1}</h5>
                  <h5>{service.description2}</h5>
                </div>
                {/* <div className="tp-shop-service-thumb">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={140}
                    height={140}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
