"use client";

import { TReview } from "@/types/review";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import Review from "./Review";

type TReviewsSliderProps = {
	reviewsData: TReview[];
};

export default function ReviewsSlider2({ reviewsData }: TReviewsSliderProps) {
	const reviewCarouselSettings: SwiperProps = {
		loop: false,
		freeMode: true,
		slidesPerView: 3,
		spaceBetween: 24,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		pagination: {
			el: ".review-carousel-container .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			1: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	};

	return (
		<div className="review-carousel-container position-relative">
			<Swiper
				{...reviewCarouselSettings}
				modules={[Autoplay, A11y, Pagination]}
				className="swiper review-carousel"
				wrapperClass="swiper-wrapper"
			>
				{reviewsData.map((review) => (
					<SwiperSlide key={review.id} className="swiper-slide h-auto">
						<Review data={review} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-pagination justify-center mt-8"></div>
		</div>
	);
}
