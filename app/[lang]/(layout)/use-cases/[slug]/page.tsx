import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Newsletter from "@/components/utils/Newsletter";
import Reveal from "@/components/utils/Reveal";
import ChatWidget from "@/components/usecase/ChatWidget";
import { getusecaseData } from "@/utils/usecases";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/app/[lang]/dictionaries";

export function generateMetadata({ params }: { params: { slug: string; lang: string } }): Metadata {
    const { slug: slugFromUrl } = params;
    const { title } = getusecaseData(slugFromUrl, params.lang);
    return {
        title: title,
    };
}

export default function UsecaseDetails({ params }: { params: { slug: string; lang: string } }) {
    const { slug: slugFromUrl } = params;
    const dict = getDictionary(params.lang);
    const { title, content, image } = getusecaseData(slugFromUrl, params.lang);

    return (
        <main className="flex-grow-1">
            <Breadcrumb
                title={title}
                path={[
                    {
                        text: dict.breadcrumbs.home,
                        link: "/",
                    },
                    {
                        text: dict.breadcrumbs.useCases,
                        link: "/use-cases",
                    },
                    {
                        text: title,
                    },
                ]}
            />

            <section className="pt-10 pt-lg-15">
                <div className="container">
                    <div className="row align-center">
                        <Reveal className="col-lg-6 col-xl-5" delay={0.05}>
                            <div className="text-center text-lg-start">
                                <h1 className="mb-4 text-white">
                                    {dict.useCases.slug.feedbackSection.title}
                                </h1>
                                <p className="mb-8">
                                    {dict.useCases.slug.feedbackSection.description}
                                </p>
                                <div className="w-xl-3quarter">
                                    <Newsletter lang={params.lang} />
                                </div>
                            </div>
                        </Reveal>
                        <Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
                            <div className="text-center rounded">
                                <Image
                                    placeholder="blur"
                                    src={require(`@/public/images/usecases/${image}`)}
                                    alt="image"
                                    className="img-fluid d-inline-block"
                                />
                            </div>
                        </Reveal>
                    </div>
                    <hr className="border-top border-dark-blue opacity-100 my-18" />
                    <div className="row justify-center">
                        <div className="col-lg-8">
                            <Markdown
                                options={{
                                    wrapper: "article",
                                    overrides: {
                                        img: {
                                            component: Image,
                                            props: {
                                                className: "img-fluid rounded",
                                                width: 800,
                                                height: 450,
                                            },
                                        },
                                    },
                                }}
                            >
                                {content}
                            </Markdown>
                        </div>
                    </div>
                    <div>
                        <ChatWidget assistantKey="" />
                    </div>
                </div>
            </section>

            {/* <ReviewsSection /> */}

            <FaqSection />

            <CtaHome lang={params.lang} />
        </main>
    );
}
