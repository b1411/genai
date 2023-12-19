import { dataFaqs } from "@/data/faq";
import Reveal from "../utils/Reveal";
import Faq from "./Faq";

export default function FaqSection() {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-10">
						<div className="text-center">
							<Reveal el="h1" className="text-white mb-0" delay={0.05}>
								Questions About our GenAI? <br className="d-none d-md-block" />
								We have Answers!
							</Reveal>
						</div>
					</div>
				</div>

				<div className="row justify-center">
					<Reveal className="col-lg-8" delay={0.1}>
						<Faq data={dataFaqs} />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
