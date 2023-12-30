"use client";

import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-1.jpg";
import shapeImage from "@/public/images/shapes/blurry-shape-1.svg";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import TypedText from "./TypedText";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function Herosection() {
    const router = usePathname();
    const lang = router.split("/")[1];
    let dict = getDictionary(lang).home.herosection;
    return (
        <section
            className="hero-section style-1 overflow-hidden bg-dark pt-30 pb-15 pb-lg-20 pt-xl-36"
            data-bs-theme="dark"
        >
            <div className="container">
                <div className="row justify-center">
                    <div className="col-lg-9">
                        <div className="text-center">
                            <div className="position-relative z-1">
                                <Reveal el="p" className="text-primary-dark">
                                    {dict.subtitle}
                                </Reveal>
                                <Reveal el="h1" className="text-white mb-8" delay={0.15}>
                                    TANIR TECH <TypedText />
                                </Reveal>
                                <Reveal delay={0.3}>
                                    <Link href="/contact" className="btn btn-lg btn-gradient-1">
                                        {dict.button}
                                    </Link>
                                </Reveal>
                            </div>
                            <Reveal delay={0.45}>
                                <div className="image-with-shape">
                                    <Image
                                        src={shapeImage}
                                        alt="shape"
                                        className="shape animate-scale"
                                    />
                                    <div className="mt-12 rounded-5 border border-primary-dark shadow-lg overflow-hidden position-relative z-1">
                                        <Image
                                            placeholder="blur"
                                            src={heroImage}
                                            alt="hero image"
                                            className="img-fluid d-inline-block"
                                        />
                                    </div>
                                </div>
                            </Reveal>
                            <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                                {dict.advantages.map((advantage: any, index: number) => (
                                    <li key={index}>{advantage}</li>
                                ))}
                            </ul>
                            {/* <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                                <Image src={reviewIcon1} alt="icon" className="img-fluid"/>
                                <Image src={reviewIcon2} alt="icon" className="img-fluid"/>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
