"use client"

import { dataReviews, dataReviewsEn } from "@/data/reviews";
import starIcon from "@/public/images/icons/star.png";
import Image from "next/image";
import Reveal from "../utils/Reveal";
import ReviewsSlider from "./ReviewsSlider";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default function ReviewsSection() {
    const lang = usePathname().split("/")[1].toString();
    let data = [];
    if (lang === "en") {
        data = dataReviewsEn;
    } else {
        data = dataReviews;
    }
    const dict = getDictionary(lang).home.reviewsSection;

    return (
        <section className="overflow-hidden pt-20 pt-lg-30 pb-10 pb-lg-15">
            <div className="container">
                <div className="row justify-center mb-18">
                    <div className="col-lg-9">
                        <div className="text-center">
                            <Reveal el="h1" className="text-white" delay={0.05}>
                                <Image placeholder="blur" src={starIcon} alt="оценку" />
                                {dict.title}{ " "}
                                <span className="text-primary-dark">QAZ.AI</span>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewsSlider reviewsData={data} />
            <span className="d-block mt-6"></span>
            <ReviewsSlider reviewsData={data} reverseDirection />
        </section>
    );
}
