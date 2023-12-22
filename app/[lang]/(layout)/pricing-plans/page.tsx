import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import PricingSection2 from "@/components/pricing/PricingSection2";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";
import { getDictionary } from "../../dictionaries";

export const metadata: Metadata = {
    title: "Тарифы",
};

export default async function PricingPlans({ params: { lang } }: { params: { lang: string } }) {
    const dict = await getDictionary(lang);
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
