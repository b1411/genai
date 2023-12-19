import { dataBrandLogos } from "@/data/brandlogos";
import Reveal from "../utils/Reveal";
import BrandLogo from "./BrandLogo";

export default function BrandLogoSection() {
	return (
		<div className="row justify-center">
			<div className="col-lg-10">
				<div className="text-center">
					<Reveal el="h4" className="mb-10" delay={0.05}>
						<span className="text-gradient-2">20,000+</span>
						Professionals & Teams Choose{" "}
						<span className="text-primary-dark">GenAI.</span>
					</Reveal>
					<div className="row align-center justify-center row-cols-3 row-cols-md-5 g-6 g-lg-10 g-xl-20">
						{dataBrandLogos.map((brandLogo) => (
							<BrandLogo key={brandLogo.id} data={brandLogo} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
