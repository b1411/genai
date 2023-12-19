"use client";

import { useAppContext } from "@/context/appContext";
import React, { useEffect } from "react";

type TFixPaddingLayout = {
	children: React.ReactNode;
};

export default function WithPaddingLayout({ children }: TFixPaddingLayout) {
	const { headerHeight } = useAppContext();

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.body.style.paddingTop = headerHeight + "px";
		}
	}, [headerHeight]);

	return children;
}
