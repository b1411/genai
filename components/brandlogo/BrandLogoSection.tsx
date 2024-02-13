"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reveal from "../utils/Reveal";

export default function BrandLogoSection() {
    let indices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Стили для слайдера
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidestoScroll: 5,
        autoplay: true,
        accessability: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-auto">
            <Reveal delay={0.05}>
                <div className="container">
                    <Slider {...settings}>
                        {indices.map((el, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        border: "none",
                                        outline: "none",
                                    }}
                                >
                                    <Image
                                        alt="brand"
                                        src={`/images/brands/${el}.png`}
                                        width={200}
                                        height={200}
                                        className="img-fluid brand-img mx-auto"
                                        style={{
                                            border: "none",
                                            outline: "none",
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </Reveal>
        </div>
    );
}
