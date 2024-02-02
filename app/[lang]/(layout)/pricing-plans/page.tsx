import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import PricingSection2 from "@/components/pricing/PricingSection2";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../dictionaries";
import Head from "next/head";

export default function PricingPlans({ params: { lang } }: { params: { lang: string } }) {
    const dict = getDictionary(lang);
    const title = getDictionary(lang).metatagTitle.pricingPlansPage;
    return (
        <main className="flex-grow-1">
            <Breadcrumb
                title={dict.breadcrumbs.pricingPlans}
                path={[
                    {
                        text: dict.breadcrumbs.home,
                        link: "/",
                    },
                    {
                        text: dict.breadcrumbs.pricingPlans,
                    },
                ]}
            />

            <PricingSection2 lang={lang} />

            <FaqSection />

            <CtaHome lang={lang} />
        </main>
    );
}

export async function generateMetadata({params: {lang}}: {params: {lang: string}}, parent: ResolvingMetadata): Promise<Metadata> {
    const title = getDictionary(lang).metatagTitle.pricingPlansPage;
    return {
        title: title,
        description: getDictionary(lang).metatagDescription.pricingPlansPage,
    }
}