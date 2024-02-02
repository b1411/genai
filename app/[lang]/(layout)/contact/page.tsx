import ContactSection from "@/components/contact/ContactSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../dictionaries";

export default function ContactPage({ params: { lang } }: { params: { lang: string } }) {
    const dict = getDictionary(lang);
    const title = getDictionary(lang).metatagTitle.contactPage;
    return (
        <main className="flex-grow-1">
            <Breadcrumb
                title={dict.breadcrumbs.contact}
                path={[
                    {
                        text: dict.breadcrumbs.home,
                        link: "/",
                    },
                    {
                        text: dict.breadcrumbs.contact,
                    },
                ]}
            />

            <ContactSection lang={lang} />

            <CtaHome lang={lang} />
        </main>
    );
}

export async function generateMetadata({params: {lang}}: {params: {lang: string}}, parent: ResolvingMetadata): Promise<Metadata> {
    const title = getDictionary(lang).metatagTitle.contactPage;
    return {
        title: title,
        description: getDictionary(lang).metatagDescription.contactPage,
    }
}