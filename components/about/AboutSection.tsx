import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-4.png";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function AboutSection({ lang }: { lang: string }) {
    const dict = getDictionary(lang).about;
    return (
        <section className="py-15">
            <div className="container">
                <div className="row align-center">
                    <Reveal className="col-lg-6 col-xl-5" delay={0.05}>
                        <div className="text-center text-lg-start">
                            <p className="text-primary-dark fs-sm">{dict.aboutSection.subtitle}</p>
                            <h2 className="mb-4 text-white">{dict.aboutSection.title}</h2>
                            <p className="mb-8">{dict.aboutSection.description}</p>
                            <h4
                                style={{
                                    textTransform: "uppercase",
                                    background:
                                        "linear-gradient(92.73deg, #b324d7 7.07%, #fe577f 97.81%)",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {dict.aboutSection.buttonText}
                            </h4>
                        </div>
                    </Reveal>
                    <Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
                        <div className="text-center">
                            <Image
                                placeholder="blur"
                                src={heroImage}
                                alt="image"
                                className="img-fluid d-inline-block"
                            />
                        </div>
                    </Reveal>
                </div>
                <hr className="border-top border-lite-blue-4 opacity-100" />
                {/* <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                    <Image src={reviewIcon1} alt="icon" className="img-fluid" />
                    <Image src={reviewIcon2} alt="icon" className="img-fluid" />
                </div> */}
            </div>
        </section>
    );
}
