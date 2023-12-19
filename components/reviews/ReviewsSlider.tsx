"use client";

import { TReview } from "@/types/review";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import Review from "./Review";

type TReviewsSliderProps = {
	reviewsData: TReview[];
	reverseDirection?: boolean;
};

export default function ReviewsSlider({
	reviewsData,
	reverseDirection = false,
}: TReviewsSliderProps) {
	const reviewCarouselSettings: SwiperProps = {
		loop: true,
		freeMode: true,
		slidesPerView: 1,
		spaceBetween: 24,
		centeredSlides: false,
		allowTouchMove: true,
		speed: reverseDirection ? 8000 : 10000,
		autoplay: {
			delay: 1,
			reverseDirection: reverseDirection,
			disableOnInteraction: false,
		},
		breakpoints: {
			1: {
				slidesPerView: 1.1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2.5,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3.5,
			},
			1600: {
				slidesPerView: 4,
			},
			1900: {
				slidesPerView: 4.5,
			},
		},
	};

	return (
		<div className="review-rolling-carousel-container">
			<Swiper
				{...reviewCarouselSettings}
				modules={[Autoplay, A11y]}
				className="swiper review-rolling-carousel"
				wrapperClass="swiper-wrapper rolling-carousel-wrapper"
			>
				{reviewsData.map((review) => (
					<SwiperSlide key={review.id} className="swiper-slide h-auto">
						<Review data={review} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
