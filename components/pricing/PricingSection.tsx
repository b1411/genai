import { dataPricing } from "@/data/pricing";
import Reveal from "../utils/Reveal";
import Pricebox from "./Pricebox";

export default function PricingSection() {
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
								Get started with a 5-day trial, Cancel anytime.
							</Reveal>
						</div>
					</div>
				</div>
				<div className="row g-6 pricing-table">
					{dataPricing.map((pricing) => (
						<Reveal key={pricing.id} className="col-md-6 col-lg-4" delay={0.05}>
							<Pricebox data={pricing} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
