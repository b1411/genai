"use client";

import { stepsRu, stepsEn } from "@/data/pricing";
import Reveal from "../utils/Reveal";
import StepBox from "./Pricebox";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function PricingSection() {
    const lang = usePathname().split("/")[1].toString();
    let data = [];
    if (lang === "en") {
        data = stepsEn;
    } else {
        data = stepsRu;
    }

    const dict = getDictionary(lang).home.pricingSection;

    return (
        <section className="py-10 py-lg-15">
            <div className="container">
                <div className="row justify-center mb-18">
                    <div className="col-lg-10">
                        <div className="text-center">
                            <Reveal el="p" className="text-primary-dark" delay={0.05}>
                                {dict.subtitle}
                            </Reveal>
                            <Reveal el="h1" className="text-white mb-5" delay={0.1}>
                                {dict.title[0]} <br />
                                {dict.title[1]}
                            </Reveal>
                            <Reveal el="p" className="mb-0" delay={0.15}>
                                {dict.subtitle2}
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="row g-6">
                    {data.slice(0, 3).map((item, index) => {
                        return (
                            <Reveal key={index} className="col-lg-4" delay={0.05 * index}>
                                <div>
                                    <StepBox
                                        title={item.title}
                                        text={item.description}
                                        stepNumber={item.id}
                                    />
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
                <div className="row g-6 mt-8">
                    {data.slice(3).map((item, index) => {
                        return (
                            <Reveal key={index} className="col-lg-4" delay={0.05 * index}>
                                <div>
                                    <StepBox
                                        title={item.title}
                                        text={item.description}
                                        stepNumber={item.id}
                                    />
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
