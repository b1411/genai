import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { getPostData } from "@/utils/blogs";
import { getFormattedDate } from "@/utils/helpers";
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
	const { title } = getPostData(slugFromUrl);

	return {
		title: title,
	};
}

export default function BlogDetailsPage({ params }: TBlogDetailsPageProps) {
	const { slug: slugFromUrl } = params;
	const { title, category, date, readingTime, cover, content, author } = getPostData(slugFromUrl);

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Post Details"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Blog Posts",
						link: "/blogs",
					},
					{
						text: title,
					},
				]}
			/>

			<section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
				<div className="container">
					<div className="row justify-center mb-10">
						<div className="col-lg-8">
							<h2 className="fw-medium mb-0 text-white">{title}</h2>
						</div>
					</div>
					<div className="ratio ratio-21x9 rounded-4 overflow-hidden">
						<Image
							src={cover}
							alt={title}
							fill
							className="img-fluid post-thumbnail w-full h-full object-cover"
						/>
					</div>
					<div className="row justify-center mt-8">
						<div className="col-lg-8">
							<div className="">
								<div className="d-flex flex-wrap justify-between align-center mb-6 gap-6">
									<div className="d-flex flex-wrap align-center gap-4">
										<Image
											src={author.avatar}
											alt={author.name}
											height={32}
											width={32}
											className="w-8 h-8 object-cover rounded-circle flex-shrink-0"
										/>
										<p className="fw-medium mb-0 post-author">{author.name}</p>
									</div>

									<ul className="list-unstyled d-flex flex-wrap align-center fs-sm meta-list mb-0">
										<li>{category}</li>
										<li>{getFormattedDate(date)}</li>
										<li>{readingTime}</li>
									</ul>
								</div>
								<Markdown
									options={{
										wrapper: "article",
										overrides: {
											img: {
												props: {
													className: "img-fluid rounded-4",
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
				</div>
			</section>

			<CtaHome />
		</main>
	);
}
