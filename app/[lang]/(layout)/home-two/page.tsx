import AppusersSection from "@/components/appuser/AppusersSection";
import BlockFeatureSection2 from "@/components/blockfeature/BlockFeatureSection2";
import CtaHome2 from "@/components/cta/CtaHome2";
import FaqSection from "@/components/faq/FaqSection";
import FeaturesSection2 from "@/components/feature/FeaturesSection2";
import Herosection2 from "@/components/herosection/Herosection2";
import PricingSection2 from "@/components/pricing/PricingSection2";
import ReviewsSection2 from "@/components/reviews/ReviewsSection2";
import UsecaseSection from "@/components/usecase/UsecaseSection";
import Reveal from "@/components/utils/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Homepage2",
};

export default function Home2() {
	return (
		<main className="flex-grow-1">
			<Herosection2 />

			<FeaturesSection2 />

			<BlockFeatureSection2 />

			{/* Use cases section */}
			<section className="py-20 py-lg-30">
				<div className="container">
					<div className="row justify-center mb-18">
						<div className="col-lg-9">
							<div className="text-center">
								<Reveal el="p" className="text-primary-dark" delay={0.05}>
									GenAI Use Cases
								</Reveal>
								<Reveal el="h1" className="text-white mb-0" delay={0.1}>
									Write Better Content Faster, The Future Of AI Writing Tools is
									Here
								</Reveal>
							</div>
						</div>
					</div>
					<div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
						<UsecaseSection variant="center-styled" limit={8} />
					</div>
				</div>
			</section>x

			<AppusersSection />

			<ReviewsSection2 />

			<PricingSection2 />

			<FaqSection />

			<CtaHome2 />
		</main>
	);
}
