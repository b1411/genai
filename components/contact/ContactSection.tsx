import { dataContactInfo } from "@/data/contact";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="py-15 pt-lg-30">
            <div className="container">
                <div className="row justify-center">
                    <div className="col-lg-10">
                        <div className="row row-cols-1 row-cols-md-2 gy-20 gx-lg-20">
                            <Reveal className="col" delay={0.05}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <i className="ti ti-map-2 fs-2"></i>
                                    </div>
                                    <h3 className="fw-medium mb-0">{dataContactInfo.address}</h3>
                                </div>
                            </Reveal>
                            <Reveal className="col" delay={0.1}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <i className="ti ti-phone-call fs-2"></i>
                                    </div>
                                    <h3 className="fw-medium mb-0">
                                        {dataContactInfo.phone.map((item) => (
                                            <React.Fragment key={item}>
                                                <span>{item}</span>
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <Reveal className="ratio ratio-16x9 rounded-4 overflow-hidden mt-18" delay={0.15}>
                    <iframe
                        src="https://2gis.kz/almaty/firm/9429940000801589?m=76.949911%2C43.242245%2F16"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    ></iframe>
                </Reveal>
                <Reveal className="row justify-center mt-18" delay={0.05}>
                    <div className="col-lg-8 col-xl-6">
                        <ContactForm />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
