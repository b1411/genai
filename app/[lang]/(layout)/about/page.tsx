import AboutSection from "@/components/about/AboutSection";
import BrandLogoSection2 from "@/components/brandlogo/BrandLogoSection2";
import CtaHome from "@/components/cta/CtaHome";
import FeaturesSection3 from "@/components/feature/FeaturesSection3";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamSection from "@/components/team/TeamSection";
import { Metadata } from "next";
import { getDictionary } from "../../dictionaries";

export const metadata: Metadata = {
	title: "О нас",
};

export default function AboutPage({ params: { lang } }: { params: { lang: string } }) {
	const dict = getDictionary(lang);

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

			<AboutSection lang={lang} />

			<FeaturesSection3 lang={lang} />

			{/* <TeamSection /> */}

			<ReviewsSection />

			{/* <BrandLogoSection2 /> */}

			<CtaHome lang={lang} />
		</main>
	);
}
