"use client";

import { useAppContext } from "@/context/appContext";
import React, { useEffect } from "react";

type TFixPaddingLayout = {
	children: React.ReactNode;
};

export default function WithoutPaddingLayout({ children }: TFixPaddingLayout) {
	const { headerHeight } = useAppContext();

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.body.style.paddingTop = "0px";
		}
	}, [headerHeight]);

	return children;
}
