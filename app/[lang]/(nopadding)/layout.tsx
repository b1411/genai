import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithoutPaddingLayout from "@/components/shared/layouts/WithoutPaddingLayout";
import React from "react";

type TRootLayoutProps = {
    children: React.ReactNode;
    params: {
        lang: string;
    };
};

export default function WithLayoutPages({ children, params: { lang } }: TRootLayoutProps) {
    return (
        <WithoutPaddingLayout>
            <Header />
            {children}
            <Footer lang={lang} />
        </WithoutPaddingLayout>
    );
}
