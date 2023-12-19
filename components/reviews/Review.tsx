import { TReview } from "@/types/review";
import Image from "next/image";
import Rating from "../shared/Rating";

type TReviewProps = {
	data: TReview;
};

export default function Review({ data }: TReviewProps) {
	const { name, designation, image, rating, message } = data;

	return (
		<div className="review-card rounded h-full p-6 border bg-dark-blue-4 border-lite-blue-4">
			<div className="d-flex items-center gap-4 mb-6">
				<div className="w-12 h-12 rounded-circle overflow-hidden position-relative">
					<Image src={image} alt="image" className="w-full h-full object-cover" fill />
				</div>
				<div className="">
					<h6 className="mb-1 text-white">{name}</h6>
					<p className="mb-0 fs-sm">{designation}</p>
				</div>
			</div>
			<div className="">
				<Rating rating={rating} className="mb-3" />
				<p className="review-text mb-0">{message}</p>
			</div>
		</div>
	);
}
