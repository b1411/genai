import { dataFeatures } from "@/data/features";
import videoThumb from "@/public/images/thumbnails/video-thumb.jpg";
import Image from "next/image";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default function FeaturesSection3() {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="mb-0" delay={0.05}>
						Generate Creative AI Copy On-The-Spot, <br className="d-none d-lg-block" />
						Across Your Favorite Tools
					</Reveal>
				</div>

				<div className="row row-cols-1 row-cols-lg-3 g-6 g-xl-14">
					{dataFeatures.map((feature, index) => (
						<Reveal key={feature.id} className="col-lg-4" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				<Reveal className="video-popup-container position-relative" delay={0.05}>
					<div className="ratio ratio-16x9 rounded-4 overflow-hidden mt-16">
						<Image
							placeholder="blur"
							src={videoThumb}
							alt="thumb"
							className="img-fluid w-full h-full object-cover"
						/>
					</div>
					<a
						className="video-play-btn bg-primary-dark text-dark"
						href="https://youtu.be/OUFcCoTx8zM"
						target="_blank"
						rel="noopener noreferrer"
						data-vbtype="video"
						data-autoplay="true"
						data-maxwidth="1320px"
						data-overlay="rgba(23, 24, 37, 0.95)"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="icon"
							viewBox="0 0 16 16"
						>
							<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
						</svg>
					</a>
				</Reveal>
			</div>
		</section>
	);
}
