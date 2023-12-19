"use client";

import { TPricing } from "@/types/pricing";
import { SyntheticEvent } from "react";
import { toast } from "react-toastify";

type TPriceboxProps = {
	data: TPricing;
};

export default function Pricebox({ data }: TPriceboxProps) {
	const { id, name, isPopular, price, description, buttonText, features } = data;

	const handleChoosePlan = (e: SyntheticEvent) => {
		e.preventDefault();
		toast.success(`Successfully choose plan ${id}!`);
	};

	return (
		<div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-darkdark">
			{isPopular && <span className="badge text-bg-primary px-4 py-2">Most Popular</span>}
			<h3 className="text-primary-dark fw-medium mb-0">{name}</h3>
			<h1 className="display-2 fw-semibold text-white mb-0 mt-4">${price}</h1>
			<p className="text-white lead fw-normal mt-4 mb-0">{description}</p>
			<button
				className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3"
				onClick={(e) => handleChoosePlan(e)}
			>
				{buttonText}
			</button>
			<ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
		</div>
	);
}
