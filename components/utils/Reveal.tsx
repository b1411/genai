"use client";

import { motion } from "framer-motion";
import React, { ElementType, HTMLAttributes } from "react";

type TRevealProps = HTMLAttributes<HTMLElement> & {
	children: React.ReactNode;
	delay?: number;
	el?: ElementType;
	className?: string;
};

export default function Reveal({ el, children, delay, className, ...rest }: TRevealProps) {
	const DynamicComponent = el ? motion(el) : motion.div;

	return (
		// @ts-ignore
		<DynamicComponent
			initial={{ opacity: 0, translateY: 20, transitionProperty: "transform opacity" }}
			whileInView={{ opacity: 1, translateY: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: delay }}
			className={className}
			{...rest}
		>
			{children}
		</DynamicComponent>
	);
}
