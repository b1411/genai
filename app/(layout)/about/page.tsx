import AboutSection from "@/components/about/AboutSection";
import BrandLogoSection2 from "@/components/brandlogo/BrandLogoSection2";
import CtaHome from "@/components/cta/CtaHome";
import FeaturesSection3 from "@/components/feature/FeaturesSection3";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamSection from "@/components/team/TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="About GenAI."
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "About Us",
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
