import { dataFeatures, dataFeaturesEn } from "@/data/features";
import videoThumb from "@/public/images/thumbnails/video-thumb.jpg";
import Image from "next/image";
import Reveal from "../utils/Reveal";
import { TFeature } from "@/types/feature";
import Feature from "./Feature";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function FeaturesSection3({ lang }: { lang: string }) {
    const dict = getDictionary(lang).about.featureSection;
    let data: TFeature[] = [];
    if (lang == "en") {
        data = dataFeaturesEn;
    } else {
        data = dataFeatures;
    }
    return (
        <section className="pb-10 pb-lg-15">
            <div className="container">
                <div className="text-center mb-18">
                    <Reveal el="h1" className="mb-0" delay={0.05}>
                        {dict.title.textBeforeHeghlight}<span className="text-primary-dark ">{dict.title.highlighted}</span>{dict.title.textAfterHeghlight}
                    </Reveal>
                </div>

                <div className="row row-cols-1 row-cols-lg-3 g-6 g-xl-14">
                    {data.map((feature, index) => (
                        <Reveal key={feature.id} className="col-lg-4" delay={0.2}>
                            <Feature lang={lang} data={feature} index={index} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="video-popup-container position-relative" delay={0.05}>
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-16">
                        <Image
                            placeholder="blur"
                            src={videoThumb}
                            alt="thumb"
                            className="img-fluid w-full h-full object-cover"
                        />
                    </div>
                    <a
                        className="video-play-btn bg-primary-dark text-dark"
                        href="https://youtu.be/OUFcCoTx8zM"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-vbtype="video"
                        data-autoplay="true"
                        data-maxwidth="1320px"
                        data-overlay="rgba(23, 24, 37, 0.95)"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="icon"
                            viewBox="0 0 16 16"
                        >
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
