"use client";

import { AppProvider } from "@/context/appContext";
import { AuthProvider } from "@/context/authContext";
import React from "react";
import { ToastContainer } from "react-toastify";

type TRootClientLayoutProps = {
	children: React.ReactNode;
};

export default function RootClientLayout({ children }: TRootClientLayoutProps) {
	return (
		<React.Fragment>
			<AppProvider>
				<AuthProvider>{children}</AuthProvider>
			</AppProvider>
			<ToastContainer />
		</React.Fragment>
	);
}
