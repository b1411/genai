import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithPaddingLayout from "@/components/shared/layouts/WithPaddingLayout";
import React from "react";

type TRootLayoutProps = {
	children: React.ReactNode;
};

export default function WithLayoutPages({ children }: TRootLayoutProps) {
	return (
		<WithPaddingLayout>
			<Header />
			{children}
			<Footer />
		</WithPaddingLayout>
	);
}
