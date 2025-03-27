import { EmailThree, TelSvgTwo } from "../svg";

const contactInfoData = [
    {
        icon: <EmailThree />,
        title: 'Feedback',
        description: 'Speak to our friendly team',
        linkText: 'admin@smartkriya.com',
        href: 'mailto:admin@smartkriya.com'
    },
    {
        icon: <TelSvgTwo />,
        title: 'Message us on WhatsApp',
        description: 'Mon-Sat from 9am to 5pm',
        linkText: '99440 39333, 93644 22111',
        // href: 'tel:+919944039333'
    },
    
    // {
    //     icon: <LocationFour />,
    //     title: 'Visit Us',
    //     description: 'Visit our office HQ.',
    //     linkText: '77 Robinson Road #33-01',
    //     href: '#'
    // }
];

export default function ContactInfoArea() {
    return (
        <section className="tp-contact-info-area tp-contact-p pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-info-wrapper text-center">
                            <h3 className="tp-contact-main-title">Let us know how we can help</h3>
                        </div>
                        <div className="row">
                            {contactInfoData.map((item, index) => (
                                <div key={index} className="col-lg-6 col-md-6">
                                    <div className="tp-contact-info-item mb-30">
                                        <div className="tp-contact-info-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <h4 className="tp-contact-info-title">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <a href={item.href}>{item.linkText}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
