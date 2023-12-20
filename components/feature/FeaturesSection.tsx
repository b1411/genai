import { dataFeatures } from "@/data/features";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Feature from "./Feature";

export default function FeaturesSection() {
	return (
		<section className="pb-10 pb-lg-15">
			<div className="container">
				<div className="text-center mb-18">
					<Reveal el="h1" className="mb-0 text-white" delay={0.05}>
						Искусственный Интеллект в Действии
					</Reveal>
				</div>

				<div className="row g-6 g-xl-14">
					{dataFeatures.map((feature, index) => (
						<Reveal key={feature.id} className="col-lg-4" delay={0.2}>
							<Feature data={feature} index={index} />
						</Reveal>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="/contact" className="btn btn-primary-dark">
						Попробовать AI-Сотрудников
					</Link>
				</div>
			</div>
		</section>
	);
}
