import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithoutPaddingLayout from "@/components/shared/layouts/WithoutPaddingLayout";
import React from "react";

type TRootLayoutProps = {
	children: React.ReactNode;
};

export default function WithLayoutPages({ children }: TRootLayoutProps) {
	return (
		<WithoutPaddingLayout>
			<Header />
			{children}
			<Footer />
		</WithoutPaddingLayout>
	);
}
