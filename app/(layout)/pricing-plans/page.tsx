import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import PricingSection2 from "@/components/pricing/PricingSection2";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing Plans",
};

export default function PricingPlans() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Pricing & Plan"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Pricing",
					},
				]}
			/>

			<PricingSection2 />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
