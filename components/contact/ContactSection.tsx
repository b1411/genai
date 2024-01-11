import { dataContactInfo, dataContactInfoEn } from "@/data/contact";
import React from "react";
import Reveal from "../utils/Reveal";
import ContactForm from "./ContactForm";

export default function ContactSection({ lang }: { lang: string }) {
    const data = lang === "en" ? dataContactInfoEn : dataContactInfo;

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
                                    <h3 className="fw-medium mb-0">{data.address}</h3>
                                </div>
                            </Reveal>
                            <Reveal className="col" delay={0.1}>
                                <div className="text-center">
                                    <div className="icon w-18 h-18 rounded-3 p-4 d-inline-flex align-center justify-center bg-primary-dark text-dark mb-8">
                                        <i className="ti ti-phone-call fs-2"></i>
                                    </div>
                                    <h3 className="fw-medium mb-0">
                                        {data.phone.map((item) => (
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4392935811225!2d76.94742947603702!3d43.24221427112448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ee584fe528b%3A0xcb1413802f5325fb!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQnNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C-INCR0LjQt9C90LXRgdCw!5e0!3m2!1sru!2skz!4v1704736970731!5m2!1sru!2skz"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
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
