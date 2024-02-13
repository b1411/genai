import RootClientLayout from "@/components/shared/layouts/RootClientLayout";
import { Metadata, ResolvingMetadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "@/scss/style.scss";
import "@/css/main.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/utils/gtag";
import { getDictionary } from "./[lang]/dictionaries";

type TRootLayoutProps = {
    children: React.ReactNode;
    params: {
        lang: string;
    };
};

export default function RootLayout({ children, params: { lang } }: TRootLayoutProps) {
    return (
        <html lang="ru" data-bs-theme="dark">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <GoogleAnalytics />
            </head>
            <body>
                <RootClientLayout>
                    <div className="wrapper d-flex flex-column justify-between">{children}</div>
                </RootClientLayout>
                {process.env.SWITCHER_LINK ? (
                    <Link
                        href={process.env.SWITCHER_LINK}
                        className="version-switcher bg-primary position-fixed text-white"
                    >
                        Light Version
                    </Link>
                ) : null}
                <SpeedInsights />
            </body>
        </html>
    );
}

export async function generateMetadata(
    { params: { lang } }: { params: { lang: string } },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    return {
        openGraph: {
            title: "QAZ.AI - интеграция AI-сотрудников для оптимизации бизнес-процессов",
            description:
                "Интеграция AI-сотрудников для оптимизации бизнес-процессов. Максимальная эффективность и инновационные решения от TANYR Technology. Улучшите работу вашей компании с нами!",
            type: "website",
            locale: lang,
            url: "https://qaz-ai.com",
            siteName: "QAZ.AI",
            images: [
                {
                    url: "https://i.ibb.co.com/q52YvT1/photo-2024-02-13-11-09-12.jpg",
                    width: 64,
                    height: 64,
                },
            ],
        },
        icons: {
            icon: "https://i.ibb.co.com/LJsdwpb/favicon.png",
            shortcut: "https://i.ibb.co.com/LJsdwpb/favicon.png",
            apple: "https://i.ibb.co.com/LJsdwpb/favicon.png",
        },
    };
}
