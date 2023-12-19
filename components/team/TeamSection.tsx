import { dataTeam } from "@/data/team";
import Reveal from "../utils/Reveal";
import TeamProfile from "./TeamProfile";

export default function TeamSection() {
	return (
		<section className="pt-10 pt-lg-15">
			<div className="container">
				<div className="row justify-center mb-18">
					<div className="col-lg-9">
						<Reveal className="text-center" delay={0.05}>
							<h1 className="text-white">
								<span className="text-primary-dark">GenAI.</span> is Powered by a{" "}
								<br className="d-none d-xl-block" />
								Dynamic Team.
							</h1>
						</Reveal>
					</div>
				</div>

				<div className="row justify-center row-cols-1 row-cols-md-3 row-cols-xl-4 gy-10 gy-md-12 gy-lg-18">
					{dataTeam.map((team) => (
						<Reveal key={team.id} className="col" delay={0.05}>
							<TeamProfile data={team} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
