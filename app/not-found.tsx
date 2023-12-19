import Footer from "@/components/shared/layouts/Footer";
import Header from "@/components/shared/layouts/Header";
import WithPaddingLayout from "@/components/shared/layouts/WithPaddingLayout";
import notFoundImage from "@/public/images/illustrations/error-yellow.svg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<WithPaddingLayout>
			<Header />
			<main className="flex-grow-1">
				<section className="py-10 py-lg-15">
					<div className="container">
						<div className="row justify-center">
							<div className="col-lg-6">
								<div className="text-center">
									<Image
										src={notFoundImage}
										alt="not found"
										className="img-fluid mb-10"
									/>
									<h2 className="mb-4 text-white">Oops! Page Not Found.</h2>
									<p className="mb-8">
										The page you are looking for is not available or has been
										moved. Try a different page or go to homepage with the
										button below.
									</p>
									<Link href="/" className="btn btn-primary-dark">
										Go to home
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</WithPaddingLayout>
	);
}
