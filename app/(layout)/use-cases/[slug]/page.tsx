import CtaHome from "@/components/cta/CtaHome";
import FaqSection from "@/components/faq/FaqSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Newsletter from "@/components/utils/Newsletter";
import Reveal from "@/components/utils/Reveal";
import chatScreenImage from "@/public/images/screens/screen-3.png";
import { getusecaseData } from "@/utils/usecases";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";

type TBlogDetailsPageProps = {
	params: {
		slug: string;
	};
};

type TGenerateMetadataProps = {
	params: {
		slug: string;
	};
};

export function generateMetadata({ params }: TGenerateMetadataProps): Metadata {
	const { slug: slugFromUrl } = params;
	const { title } = getusecaseData(slugFromUrl);

	return {
		title: title,
	};
}

export default function UsecaseDetails({ params }: TBlogDetailsPageProps) {
	const { slug: slugFromUrl } = params;
	const { title, description, slug, content } = getusecaseData(slugFromUrl);

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title={title}
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Use cases",
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
									Complete a blog entry in half the time.
								</h1>
								<p className="mb-8">
									With a few clicks of a button, you can create a whole outline,
									opening paragraph, and body for your blog.
								</p>
								<div className="w-xl-3quarter">
									<Newsletter />
								</div>
							</div>
						</Reveal>
						<Reveal className="col-lg-6 offset-xl-1" delay={0.1}>
							<div className="text-center">
								<Image
									placeholder="blur"
									src={chatScreenImage}
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
											props: {
												className: "img-fluid rounded",
											},
										},
									},
								}}
							>
								{content}
							</Markdown>
						</div>
					</div>
				</div>
			</section>

			<ReviewsSection />

			<FaqSection />

			<CtaHome />
		</main>
	);
}
