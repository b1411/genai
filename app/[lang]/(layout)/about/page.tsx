import AboutSection from "@/components/about/AboutSection";
import BrandLogoSection2 from "@/components/brandlogo/BrandLogoSection2";
import CtaHome from "@/components/cta/CtaHome";
import FeaturesSection3 from "@/components/feature/FeaturesSection3";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamSection from "@/components/team/TeamSection";
import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../dictionaries";

export default function AboutPage({ params: { lang } }: { params: { lang: string } }) {
    const dict = getDictionary(lang);
    return (
        <main className="flex-grow-1">
            <Breadcrumb
                title={dict.breadcrumbs.about}
                path={[
                    {
                        text: dict.breadcrumbs.home,
                        link: "/",
                    },
                    {
                        text: dict.breadcrumbs.about,
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

export async function generateMetadata(
    { params: { lang } }: { params: { lang: string } },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const title = getDictionary(lang).metatagTitle.aboutPage;
    return {
        title: title,
        description: getDictionary(lang).metatagDescription.aboutPage,
        alternates: {
            canonical: "https://qaz-ai.com/about",
            languages: {
                ru: "https://qaz-ai.com/ru/about",
                en: "https://qaz-ai.com/en/about",
            },
        },
    };
}
