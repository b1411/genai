import ContactSection from "@/components/contact/ContactSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Contact With Us"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Contact",
					},
				]}
			/>

			<ContactSection />

			<CtaHome />
		</main>
	);
}
