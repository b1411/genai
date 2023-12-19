import BlockFeatureSection from "@/components/blockfeature/BlockFeatureSection";
import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import FeaturesSection from "@/components/feature/FeaturesSection";
import Herosection from "@/components/herosection/Herosection";
import PricingSection from "@/components/pricing/PricingSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import UsecaseSection from "@/components/usecase/UsecaseSection";
import Reveal from "@/components/utils/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Главная",
};

export default function Home() {
	return (
		<main className="flex-grow-1">
			<Herosection />

			<FeaturesSection />

			<BlockFeatureSection />

			{/* Use cases section */}
			<section className="bg-striped bg-striped-sm bg-striped-bottom bg-dark-blue-4 py-20 py-lg-30">
				<div className="container">
					<div className="row justify-center mb-18">
						<div className="col-lg-9">
							<div className="text-center">
								<Reveal el="p" className="text-primary-dark" delay={0.05}>
									Примеры применения
								</Reveal>
								<Reveal el="h1" className="text-white mb-0" delay={0.1}>
									Узнайте, как наши AI-решения могут улучшить ваш бизнес
								</Reveal>
							</div>
						</div>
					</div>
					<div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
						<UsecaseSection limit={8} />
					</div>
				</div>
			</section>

			<ReviewsSection />

			<PricingSection />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
