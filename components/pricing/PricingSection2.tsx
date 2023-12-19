"use client";

import { dataPricing6 as dataPricing } from "@/data/pricing";
import { TPricing, TPricingPlanType } from "@/types/pricing";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Reveal from "../utils/Reveal";
import Pricebox from "./Pricebox";

export default function PricingSection2() {
	const [pricintPlanType, setPricintPlanType] = useState<TPricingPlanType>("monthly");
	const [visibleData, setVisibleData] = useState<TPricing[]>([]);

	useEffect(() => {
		setVisibleData(dataPricing.filter((pricing) => pricing.type === pricintPlanType));
	}, [pricintPlanType]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | SyntheticEvent<HTMLLabelElement>,
		value: TPricingPlanType
	) => {
		e.preventDefault();
		setPricintPlanType(value);
	};

	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-10">
						<div className="text-center">
							<Reveal el="p" className="text-primary-dark" delay={0.05}>
								Pricing Plan
							</Reveal>
							<Reveal el="h1" className="text-white mb-5" delay={0.1}>
								Ready to Get Started? <br />
								Don&apos;t Worry, We&apos;ll Keep You Under Budget
							</Reveal>
							<Reveal el="p" className="mb-0" delay={0.15}>
								Get started with a 5-day trial,{" "}
								<span className="text-primary-dark">25% off</span> for Yearly Plan,
								Cancel anytime.
							</Reveal>
						</div>
						<Reveal className="text-center mt-12" delay={0.2}>
							<div className="switch-wrapper border d-inline-flex rounded p-2 ">
								<input
									id="monthly"
									type="radio"
									name="switch"
									onChange={(e) => handleChange(e, "monthly")}
									checked={pricintPlanType === "monthly"}
								/>
								<input
									id="yearly"
									type="radio"
									name="switch"
									onChange={(e) => handleChange(e, "yearly")}
									checked={pricintPlanType === "yearly"}
								/>
								<label
									htmlFor="monthly"
									onClick={(e) => handleChange(e, "monthly")}
								>
									Monthly
								</label>
								<label htmlFor="yearly" onClick={(e) => handleChange(e, "yearly")}>
									Yearly
								</label>
								<span className="highlighter"></span>
							</div>
						</Reveal>
					</div>
				</div>
				<div className="row g-6 pricing-table">
					{visibleData.map((pricing) => (
						<Reveal key={pricing.id} className="col-md-6 col-lg-4" delay={0.05}>
							<Pricebox data={pricing} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
