import { dataBlockFeatures } from "@/data/blockfeature";
import BlockFeature from "./BlockFeature";

export default function BlockFeatureSection() {
	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				{dataBlockFeatures.map((blockFeature, index) => (
					<BlockFeature
						key={blockFeature.id}
						index={index}
						data={blockFeature}
						reversed={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
}
