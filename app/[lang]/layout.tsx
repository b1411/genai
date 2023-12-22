import RootClientLayout from "@/components/shared/layouts/RootClientLayout";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import "swiper/css";
import "swiper/css/pagination";
// vs-code-organize-imports-disable-next-line
import "@/scss/style.scss";
import "@/css/main.css";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/utils/gtag";

export const metadata: Metadata = {
    title: {
        template: "%s | TANIR - лучший сервис для автоматизации продаж",
        default: "TANIR - лучший сервис для автоматизации продаж",
    },
    description:
        "Интеграция AI-сотрудников для оптимизации бизнес-процессов. Максимальная эффективность и инновационные решения от TANYR Technology. Улучшите работу вашей компании с нами!",
};

type TRootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayoutProps) {
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
