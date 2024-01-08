import ContactSection from "@/components/contact/ContactSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";
import { getDictionary } from "../../dictionaries";

export const metadata: Metadata = {
	title: "Контакты",
};

export default function ContactPage({ params: { lang } }: { params: { lang: string }}) {
	const dict = getDictionary(lang);
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Связаться с нами"
				path={[
					{
						text: "Главная",
						link: "/",
					},
					{
						text: "Контакты",
					},
				]}
			/>

			<ContactSection />

			<CtaHome lang={lang} />
		</main>
	);
}
