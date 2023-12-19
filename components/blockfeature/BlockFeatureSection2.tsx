import { dataBlockFeatures } from "@/data/blockfeature";
import BlockFeature2 from "./BlockFeature2";

export default function BlockFeatureSection2() {
	return (
		<section className="pt-10 pt-lg-15">
			<div className="container">
				{dataBlockFeatures.map((blockFeature, index) => (
					<BlockFeature2
						index={index}
						key={blockFeature.id}
						data={blockFeature}
						reversed={index % 2 !== 0}
					/>
				))}
			</div>
		</section>
	);
}
