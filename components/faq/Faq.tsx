"use client";

import { TFaq } from "@/types/faq";
import { useState } from "react";
import Accordion from "./Accordion";

type TFaqProps = {
	data: TFaq[];
};

export default function Faq({ data }: TFaqProps) {
	const [expanded, setExpanded] = useState<boolean | number>(0);

	return (
		<div className="accordion accordion-flush d-flex flex-column gap-6" id="faqAccordion">
			{data.map((faq, index) => (
				<Accordion
					key={faq.id}
					data={faq}
					index={index}
					expanded={expanded}
					setExpanded={setExpanded}
				/>
			))}
		</div>
	);
}
