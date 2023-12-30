import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import UsecaseSection from "@/components/usecase/UsecaseSection";
import Reveal from "@/components/utils/Reveal";
import { getDictionary } from "../../dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Примеры применения",
};

export default function UseCases({ params: { lang } }: { params: { lang: string } }) {
    const dict = getDictionary(lang).useCases;
    return (
        <main className="flex-grow-1">
            <Breadcrumb
                title="Примеры применения"
                path={[
                    {
                        text: "Главная",
                        link: "/",
                    },
                    {
                        text: "Примеры применения",
                    },
                ]}
            />

            <section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
                <div className="container">
                    <div className="row justify-center mb-18">
                        <div className="col-lg-9">
                            <div className="text-center">
                                <Reveal el="p" delay={0.05} className="text-primary-dark">
                                    {dict.subtitle}
                                </Reveal>
                                <Reveal el="h1" className="text-white mb-0" delay={0.1}>
                                    {dict.title}
                                </Reveal>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
                        <UsecaseSection />
                    </div>
                </div>
            </section>

            <FaqSection />

            <CtaHome lang={lang} />
        </main>
    );
}
