import { dataContactInfo, dataContactInfoEn } from "@/data/contact";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection({ lang }: { lang: string }) {
    const data = lang === "en" ? dataContactInfoEn : dataContactInfo;

    return (
        <section className="py-15 pt-lg-30">
            <div className="container">
                <div className="row justify-center">
                    <div className="col-lg-10">
                        <div className="row row-cols-1 row-cols-md-3 gy-20 gx-lg-20">
                            <Reveal className="col" delay={0.05}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <i className="ti ti-map-2 fs-2"></i>
                                    </div>
                                    <h3 className="fw-medium mb-0">{data.address}</h3>
                                </div>
                            </Reveal>
                            <Reveal className="col" delay={0.1}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <FontAwesomeIcon icon={faInstagram} className="fs-2" />
                                    </div>
                                    <h3 className="fw-medium mb-0">
                                        <a href="https://www.instagram.com/qaz.ai/">QAZ.AI</a>
                                    </h3>
                                </div>
                            </Reveal>
                            <Reveal className="col" delay={0.1}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <FontAwesomeIcon icon={faWhatsapp} className="fs-2" />
                                    </div>
                                    <h3 className="fw-medium mb-0">
                                        {data.phone.map((item) => (
                                            <React.Fragment key={item}>
                                                <a
                                                    href={`https://wa.me/${item
                                                        .replaceAll(" ", "")
                                                        .replaceAll("(", "")
                                                        .replaceAll(")", "")}`}
                                                >
                                                    {item}
                                                </a>
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
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d55ed2c13165155ea2b999eadfa02deb1e8a52ea89dfd8b00e0063c3aed0112&amp;source=constructor"
                        width="600"
                        height="450"
                        frameBorder="0"
                    ></iframe>
                </Reveal>
                <Reveal className="row justify-center mt-18" delay={0.05}>
                    <div className="col-lg-8 col-xl-6">
                        <ContactForm lang={lang} />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
