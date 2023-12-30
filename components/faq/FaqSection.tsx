"use client";

import { dataFaqs, dataFaqsEn } from "@/data/faq";
import Reveal from "../utils/Reveal";
import Faq from "./Faq";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function FaqSection() {
    const lang = usePathname().split("/")[1].toString();
    let data = [];
    if (lang === "en") {
        data = dataFaqsEn;
    } else {
        data = dataFaqs;
    }
    const dict = getDictionary(lang).home.faqSection;
    return (
        <section className="py-10 py-lg-15">
            <div className="container">
                <div className="row justify-center mb-18">
                    <div className="col-lg-10">
                        <div className="text-center">
                            <Reveal el="h1" className="text-white mb-0" delay={0.05}>
                                {dict.title[0]} <br className="d-none d-md-block" />
                                {dict.title[1]}
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="row justify-center">
                    <Reveal className="col-lg-8" delay={0.1}>
                        <Faq data={data} />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
