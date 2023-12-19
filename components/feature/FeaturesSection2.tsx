import { dataFeatures2 } from "@/data/features";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default function FeaturesSection2() {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="text-white mb-0" delay={0.05}>
						Generate Creative AI Copy On-The-Spot, <br className="d-none d-lg-block" />
						Across Your Favorite Tools
					</Reveal>
				</div>

				<div className="row g-6 g-xl-14">
					{dataFeatures2.map((feature, index) => (
						<Reveal key={feature.id} className="col-lg-4" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="/login" className="btn btn-primary-dark">
						Try a demo
					</Link>
				</div>
			</div>
		</section>
	);
}
