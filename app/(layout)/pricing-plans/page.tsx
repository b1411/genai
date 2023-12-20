import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import PricingSection2 from "@/components/pricing/PricingSection2";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Тарифы",
};

export default function PricingPlans() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Тарифы"
				path={[
					{
						text: "Главная",
						link: "/",
					},
					{
						text: "Тарифы",
					},
				]}
			/>

			<PricingSection2 />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
