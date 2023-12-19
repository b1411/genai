import BlogsSection from "@/components/blogs/BlogsSection";
import CtaHome from "@/components/cta/CtaHome";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Pagination from "@/components/shared/Pagination";
import { getPostsMetadata } from "@/utils/blogs";
import { Metadata } from "next";

type TBlogPageProps = {
	searchParams: {
		page: string;
	};
};

export const metadata: Metadata = {
	title: "Blogs",
};

export default function BlogsPage({ searchParams }: TBlogPageProps) {
	const pageNumber = parseInt(searchParams?.page) || 1;
	const { posts, totalPage } = getPostsMetadata(pageNumber);

	return (
		<main className="flex-grow-1">
			<Breadcrumb
				title="Blog Posts"
				path={[
					{
						text: "Home",
						link: "/",
					},
					{
						text: "Blog Posts",
					},
				]}
			/>

			<section className="pt-20 pb-10 pt-lg-30 pb-lg-15">
				<div className="container">
					<BlogsSection blogs={posts} />
					<Pagination
						path="/blogs?page="
						currentPage={pageNumber}
						totalPage={totalPage}
					/>
				</div>
			</section>

			<CtaHome />
		</main>
	);
}
