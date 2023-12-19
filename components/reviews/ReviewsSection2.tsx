import { dataReviews } from "@/data/reviews";
import starIcon from "@/public/images/icons/star.png";
import Image from "next/image";
import Reveal from "../utils/Reveal";
import ReviewsSlider2 from "./ReviewsSlider2";

export default function ReviewsSection2() {
	return (
		<section className="overflow-hidden pt-20 pt-lg-30 pb-10 pb-lg-15">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-9">
						<div className="text-center">
							<Reveal el="h1" className="text-white" delay={0.05}>
								<span className="text-primary-dark">GenAI.</span> Received{" "}
								<Image placeholder="blur" src={starIcon} alt="icon" /> 4.8/5 Stars
								in Over 10,000+ Reviews.
							</Reveal>
						</div>
					</div>
				</div>
				<ReviewsSlider2 reviewsData={dataReviews} />
			</div>
		</section>
	);
}
