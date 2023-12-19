import { dataAppusers } from "@/data/appusers";
import Reveal from "../utils/Reveal";
import Appuser from "./Appuser";

export default function AppusersSection() {
	return (
		<section className="bg-dark-blue-4 py-20 py-lg-30">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-9">
						<div className="text-center">
							<Reveal el="h1" className="text-white mb-0" delay={0.05}>
								Who are the user of{" "}
								<span className="text-primary-dark">GenAI.</span> writing tools
							</Reveal>
						</div>
					</div>
				</div>

				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-10 g-xl-24 divider-x">
					{dataAppusers.map((appUser) => (
						<Reveal key={appUser.id} className="col" delay={0.05}>
							<Appuser data={appUser} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
