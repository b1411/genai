"use client";

import { dataFeatures, dataFeaturesEn } from "@/data/features";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { useAppContext } from "@/context/appContext";

export default function FeaturesSection({ lang }: { lang: string }) {
    let data = [];
    if (lang == "en") {
        data = dataFeaturesEn;
    } else {
        data = dataFeatures;
    }
    let dict = getDictionary(lang).home.featuresSection;

    let { onOpenModal } = useAppContext();
    return (
        <section className="pb-10 pb-lg-15">
            <div className="container">
                <div className="text-center mb-18">
                    <Reveal el="h1" className="mb-0 text-white" delay={0.05}>
                        {dict.title}
                    </Reveal>
                </div>

                <div className="row g-6 g-xl-14">
                    {data.map((feature, index) => (
                        <Reveal key={feature.id} className="col-lg-4" delay={0.2}>
                            <Feature data={feature} index={index} lang={lang} />
                        </Reveal>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="btn btn-primary-dark" onClick={() => onOpenModal()}>
                        {dict.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
