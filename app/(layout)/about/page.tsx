import AboutSection from "@/components/about/AboutSection";
import BrandLogoSection2 from "@/components/brandlogo/BrandLogoSection2";
import CtaHome from "@/components/cta/CtaHome";
import FeaturesSection3 from "@/components/feature/FeaturesSection3";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamSection from "@/components/team/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "О нас",
};

export default function AboutPage() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="О TANIR"
				path={[
					{
						text: "Главная",
						link: "/",
					},
					{
						text: "О нас",
					},
				]}
			/>

			<AboutSection />

			<FeaturesSection3 />

			<TeamSection />

			<ReviewsSection />

			<BrandLogoSection2 />

			<CtaHome />
		</main>
	);
}
