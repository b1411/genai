import React from "react";

type TRatingProps = {
	rating: number;
	className?: string;
};

export default function Rating({ rating, className }: TRatingProps) {
	const roundedRating = Math.round(rating);

	return (
		<div className={`stars d-flex items-center gap-1 ${className ?? className}`}>
			{[...Array(5)].map((_, index) => (
				<React.Fragment key={index}>
					{index + 1 <= roundedRating ? (
						<i className={`text-primary-dark fs-lg ti ti-star-filled`}></i>
					) : (
						<i className={`text-primary-dark fs-lg ti ti-star opacity-50`}></i>
					)}
				</React.Fragment>
			))}
		</div>
	);
}
