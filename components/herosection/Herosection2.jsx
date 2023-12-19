import reviewIcon2 from "@/public/images/review-logos/capterra_reviews.svg";
import reviewIcon1 from "@/public/images/review-logos/trustpilot_reviews.svg";
import heroImage from "@/public/images/screens/screen-2.jpg";
import blurryShape2 from "@/public/images/shapes/blurry-shape-2.svg";
import bgStripe from "@/public/images/shapes/stripe-dark.svg";
import Image from "next/image";
import BrandLogoSection from "../brandlogo/BrandLogoSection";
import Newsletter from "../utils/Newsletter";
import Reveal from "../utils/Reveal";

export default function Herosection2() {
	return (
		<section className="hero-section style-2 position-relative py-10 py-lg-15">
			<div className="striped-shape">
				<Image src={bgStripe} alt="shape" />
			</div>
			<div className="container">
				<div className="row align-center">
					<div className="col-lg-5">
						<div className="text-center text-lg-start position-relative z-1">
							<Reveal el="p" className="text-primary-dark" delay={0.05}>
								<span className="border px-4 py-2 rounded-3 d-inline-block">
									Best AI Copywriting Tool
								</span>
							</Reveal>
							<Reveal el="h1" className="text-white mb-8" delay={0.1}>
								Create better content in less time; the future of{" "}
								<span className="text-primary-dark">AI writing</span> tools is
								arrived.
							</Reveal>
							<div className="pe-xl-10">
								<Newsletter textButton />
							</div>
							<Reveal
								className="d-flex gap-8 align-center justify-center justify-lg-start mt-12 review-badges"
								delay={0.2}
							>
								<Image src={reviewIcon1} alt="icon" className="img-fluid" />
								<Image src={reviewIcon2} alt="icon" className="img-fluid" />
							</Reveal>
						</div>
					</div>
					<Reveal className="col-lg-7" delay={0.2}>
						<div className="image-with-shape">
							<Image src={blurryShape2} alt="shape" className="shape animate-scale" />
							<div className="mt-12 rounded-4 border shadow-lg overflow-hidden">
								<Image
									placeholder="blur"
									src={heroImage}
									alt="hero image"
									className="img-fluid d-inline-block"
								/>
							</div>
						</div>
					</Reveal>
				</div>
				<span className="d-block mt-18"></span>
				<BrandLogoSection />
			</div>
		</section>
	);
}
