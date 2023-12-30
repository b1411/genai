import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithPaddingLayout from "@/components/shared/layouts/WithPaddingLayout";
import React from "react";

type TRootLayoutProps = {
	children: React.ReactNode;
	params: {
		lang: string;
	};
};

export default function WithLayoutPages({ children, params: { lang } }: TRootLayoutProps) {
	return (
		<WithPaddingLayout>
			<Header />
			{children}
			<Footer lang={lang} />
		</WithPaddingLayout>
	);
}
